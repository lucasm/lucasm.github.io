import React, { useState, useEffect, useMemo } from 'react'
import debounce from 'lodash/debounce'
import StyleProductCard from '../ProductCard/ProductCard.module.css'
import { IconAmazon } from '../../Svgs'
import SearchNotFound from '../SearchNotFound'

interface AmazonSearchProps {
  keyword: string
  onReset: () => void
}

const AmazonSearch = ({ keyword, onReset }: AmazonSearchProps) => {
  const [items, setItems] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Debounce a função de busca para evitar chamadas excessivas
  const debouncedFetchItems = useMemo(
    () =>
      debounce(async (searchTerm) => {
        if (!searchTerm) return

        setLoading(true) // Define loading como true para indicar que a busca está em andamento
        setItems([]) // Limpa os itens antes de iniciar uma nova busca

        try {
          const response = await fetch(
            `/api/amazonSearch?Keywords=${encodeURIComponent(searchTerm)}`
          )
          if (!response.ok) {
            throw new Error('Erro ao buscar os itens')
          }
          const data = await response.json()
          setItems(data)
          setLoading(false)
        } catch (error) {
          setError(error.message)
          setLoading(false)
        }
      }, 500), // 500ms de delay antes de disparar a busca
    []
  )

  useEffect(() => {
    debouncedFetchItems(keyword)

    // Cleanup do debounce na desmontagem do componente
    return () => {
      debouncedFetchItems.cancel()
    }
  }, [keyword, debouncedFetchItems])

  if (loading) return <p>Carregando...</p>
  if (error) return <SearchNotFound onReset={onReset} />

  return (
    <div id="products">
      <h2>Resultados para "{keyword}"</h2>

      {items?.SearchResult?.Items.length > 0 && (
        <ul className={StyleProductCard.container}>
          {items?.SearchResult?.Items.map((item, index) => (
            <li key={index} className={StyleProductCard.product}>
              <a href={item.DetailPageURL} target="_blank" rel="noreferrer">
                <img
                  src={item.Images?.Primary?.Large?.URL}
                  alt={item.ItemInfo?.Title?.DisplayValue}
                />
                <h3>{item.ItemInfo?.Title?.DisplayValue}</h3>
              </a>
            </li>
          ))}
          <li className={StyleProductCard.product}>
            <a
              href={items?.SearchResult?.SearchURL}
              target="_blank"
              rel="noreferrer">
              <IconAmazon />
              <h3>Ver mais "{keyword}" na Amazon</h3>
            </a>
          </li>
        </ul>
      )}

      {items?.Errors[0]?.Code === 'NoResults' && (
        <SearchNotFound onReset={onReset} />
      )}
    </div>
  )
}

export default AmazonSearch
