import { useState } from 'react'
import Link from 'next/link'
import {
  IconCodepen,
  IconDev,
  IconGithub,
  IconX,
  IconLinkedin,
  IconYoutube,
  IconSpotify,
  IconBluesky,
  IconMastodon,
  IconLetterboxd,
  IconDiscord,
  IconInstagram,
  IconStore,
  IconHeart,
  IconWhatsapp,
  IconMore,
  IconLess,
} from './Svgs'

interface ILinks {
  url: string
  icon: JSX.Element
  text: string
  internalPage?: boolean
  active: boolean
  fullText?: boolean
}

const Links: ILinks[] = [
  {
    url: 'https://x.com/lucasmezs',
    icon: <IconX />,
    text: 'X (Twitter)',
    active: true,
  },
  {
    url: 'https://github.com/lucasm',
    icon: <IconGithub />,
    text: 'GitHub',
    active: true,
  },
  {
    url: 'https://dev.to/lucasm',
    icon: <IconDev />,
    text: 'DEV',
    active: true,
  },
  {
    url: 'https://codepen.io/lucasm',
    icon: <IconCodepen />,
    text: 'CodePen',
    active: true,
  },
  {
    url: 'https://linkedin.com/in/lucasmezs',
    icon: <IconLinkedin />,
    text: 'LinkedIn',
    active: true,
  },
  {
    url: 'https://youtube.com/@lucasmdev',
    icon: <IconYoutube />,
    text: 'YouTube',
    active: true,
  },
  {
    url: 'https://discord.com/users/lucasmezs',
    icon: <IconDiscord />,
    text: 'Discord',
    active: true,
  },
  {
    url: 'https://instagram.com/lucasmezs',
    icon: <IconInstagram />,
    text: 'Instagram',
    active: true,
  },
  {
    url: 'https://open.spotify.com/user/lucasmauess',
    icon: <IconSpotify />,
    text: 'Spotify',
    active: true,
  },
  {
    url: 'https://letterboxd.com/lucasmezs',
    icon: <IconLetterboxd />,
    text: 'Letterboxd',
    active: true,
  },
  {
    url: 'https://lucasme.bsky.social',
    icon: <IconBluesky />,
    text: 'Bluesky',
    active: true,
  },
  {
    url: 'https://mastodon.social/@lucasmezs',
    icon: <IconMastodon />,
    text: 'Mastodon',
    active: true,
  },
  {
    url: '/store',
    icon: <IconStore />,
    text: 'Loja Dev',
    active: true,
    internalPage: true,
    fullText: true,
  },
  {
    url: 'https://patreon.com/lucasm',
    icon: <IconHeart />,
    text: 'Mentorias Dev',
    active: false,
    fullText: true,
  },
  {
    url: 'https://wa.me/5531997038007',
    icon: <IconWhatsapp />,
    text: 'Falar no WhatsApp',
    active: true,
    fullText: true,
  },
]

export default function ComponentLinks() {
  const [showMore, setShowMore] = useState(false)

  const handleToggle = () => {
    setShowMore((prev) => !prev)
  }

  const fullTextLinks = Links.filter((link) => link.fullText)
  const otherLinks = Links.filter((link) => !link.fullText)

  const visibleOtherLinks = showMore ? otherLinks : otherLinks.slice(0, 6)

  return (
    <div>
      <ul className="links">
        {fullTextLinks.concat(visibleOtherLinks).map((link, index) => (
          <li
            key={index}
            className={link.fullText ? 'full-text' : undefined}
            style={{ marginBottom: index === fullTextLinks.length - 1 ? '2rem' : undefined }}>
            <Link
              href={link.url}
              target={link.internalPage ? '_self' : '_blank'}
              rel={link.internalPage ? 'prefetch' : 'noopener'}
              title={link.text}>
              {link.icon}
              {link.text}
            </Link>
          </li>
        ))}
        {otherLinks.length > 6 && (
          <li>
            <button onClick={handleToggle} aria-expanded={showMore ? 'true' : 'false'}>
              {showMore ? <IconLess /> : <IconMore />}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}
