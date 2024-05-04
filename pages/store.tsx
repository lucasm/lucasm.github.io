import { useRef, useState } from 'react'
import PageLayout from '../components/PageLayout'
import Style from '../styles/Store.module.css'
import StyleCard from '../components/store/ProductCard/ProductCard.module.css'
import Banners from '../components/store/Banners'
import { IconHeart, IconWarning } from '../components/Svgs'
import ProductPopup from '../components/store/ProductPopup'
import { productsBR } from '../data/productsBR'
import ProductCard from '../components/store/ProductCard'

export default function PageStore() {
  const title = 'Loja Dev'
  const image = 'https://lucasm.dev/share-store.png'
  const description = 'Os melhores produtos para programadores e amantes de tecnologia.'

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [category, setCategory] = useState('Todos')

  const filteredProducts =
    category === 'Todos'
      ? productsBR
      : productsBR.filter((product) => product.category === category)

  const containerProductsRef = useRef<HTMLDivElement>(null)

  const handleClickCategory = (category: string) => {
    setCategory(category)
    if (containerProductsRef?.current) {
      containerProductsRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleOpenProductPopup = (product) => {
    setSelectedProduct(product)
  }
  const handleCloseProductPopup = () => {
    setSelectedProduct(null)
  }

  return (
    <PageLayout title={title} description={description} image={image}>
      <section>
        <div className="container page">
          {/* <figure className={Style.icon}>
            <IconHeart />
          </figure> */}
          <h1>{title}</h1>
          <p>{description}</p>

          <p>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: 'fit-content',
                margin: '1rem auto',
              }}
              href="https://www.paraquemdoar.com.br/?ref=lucasm.dev"
              target="_blank"
              rel="noopener noreferrer">
              <IconWarning />
              Doe para o Rio Grande do Sul
            </a>
          </p>

          <div className={Style.buttons}>
            <button
              onClick={() => handleClickCategory('Todos')}
              className={category === 'Todos' ? Style.buttonActive : undefined}>
              Tudo
            </button>
            <button
              onClick={() => handleClickCategory('Dispositivos')}
              className={category === 'Dispositivos' ? Style.buttonActive : undefined}>
              Dispositivos
            </button>
            <button
              onClick={() => handleClickCategory('Acessórios')}
              className={category === 'Acessórios' ? Style.buttonActive : undefined}>
              Acessórios
            </button>
            <button
              onClick={() => handleClickCategory('Livros')}
              className={category === 'Livros' ? Style.buttonActive : undefined}>
              Livros
            </button>
          </div>
        </div>

        <div className={StyleCard.container} ref={containerProductsRef}>
          <ul>
            {filteredProducts.map((product, index) => (
              <li key={index}>
                <ProductCard product={product} handleOnClick={handleOpenProductPopup} />
              </li>
            ))}
          </ul>
        </div>

        <Banners />
      </section>

      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={handleCloseProductPopup} />
      )}
    </PageLayout>
  )
}
