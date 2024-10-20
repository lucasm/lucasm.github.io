import { useState } from 'react'
import Styles from './Links.module.css'
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
  IconWhatsapp,
  IconMore,
  IconLess,
  IconThreads,
} from '../Svgs'
import { ROUTES } from '../../routes/routes'
import PrefetchImages from '../store/PrefetchImages'

interface ILinks {
  url: string
  icon?: JSX.Element
  text: string
  internalPage?: boolean
  active: boolean
  fullText?: boolean
}

const linksList: ILinks[] = [
  {
    url: 'https://x.com/lucasmezs',
    icon: <IconX />,
    text: 'X (Twitter)',
    active: true,
  },
  {
    url: 'https://bsky.app/profile/lucasm.dev',
    icon: <IconBluesky />,
    text: 'Bluesky',
    active: true,
  },
  {
    url: 'https://github.com/lucasm',
    icon: <IconGithub />,
    text: 'GitHub',
    active: true,
  },
  {
    url: 'https://youtube.com/@lucasmdev',
    icon: <IconYoutube />,
    text: 'YouTube',
    active: true,
  },
  {
    url: 'https://linkedin.com/in/lucasmezs',
    icon: <IconLinkedin />,
    text: 'LinkedIn',
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
    url: 'https://wa.me/5531997038007',
    icon: <IconWhatsapp />,
    text: 'WhatsApp',
    active: true,
  },
  {
    url: 'https://instagram.com/lucasmezs',
    icon: <IconInstagram />,
    text: 'Instagram',
    active: true,
  },
  {
    url: 'https://threads.net/@lucasmezs',
    icon: <IconThreads />,
    text: 'Threads',
    active: false,
  },
  {
    url: 'https://discord.com/users/lucasm.dev',
    icon: <IconDiscord />,
    text: 'Discord',
    active: false,
  },
  {
    url: 'https://open.spotify.com/user/lucasmauess',
    icon: <IconSpotify />,
    text: 'Spotify',
    active: false,
  },
  {
    url: 'https://letterboxd.com/lucasmezs',
    icon: <IconLetterboxd />,
    text: 'Letterboxd',
    active: false,
  },
  {
    url: 'https://mastodon.social/@lucasmezs',
    icon: <IconMastodon />,
    text: 'Mastodon',
    active: false,
  },
  {
    url: ROUTES.BLOG.path,
    text: ROUTES.BLOG.title,
    active: true,
    fullText: true,
    internalPage: true,
  },
  {
    url: ROUTES.STORE.path,
    text: ROUTES.STORE.title,
    active: true,
    fullText: true,
    internalPage: true,
  },
  {
    url: ROUTES.MENTORSHIP.path,
    text: ROUTES.MENTORSHIP.title,
    active: true,
    fullText: true,
    internalPage: true,
  },
]

const Links = () => {
  const [showMore, setShowMore] = useState(false)
  const [prefetchEnabled, setPrefetchEnabled] = useState(false)

  const handleToggle = () => {
    setShowMore((prev) => !prev)
  }
  const handleMouseEnterStore = () => {
    setPrefetchEnabled(true)
  }

  const fullTextLinks = linksList.filter((link) => link.fullText)
  const otherLinks = linksList.filter((link) => !link.fullText)
  const limitOfLinks = 7
  const visibleOtherLinks = showMore
    ? otherLinks
    : otherLinks.slice(0, limitOfLinks)

  return (
    <div>
      <PrefetchImages enabled={prefetchEnabled} />
      <ul className={`${Styles.links} ${Styles.containerText}`}>
        {fullTextLinks.map((link, index) => (
          <li key={index} className={Styles.text}>
            <Link
              href={link.url}
              target={link.internalPage ? '_self' : '_blank'}
              rel={link.internalPage ? 'prefetch' : 'noopener'}
              title={link.text}
              onMouseEnter={
                link.text === ROUTES.STORE.title
                  ? handleMouseEnterStore
                  : undefined
              }>
              {link.icon}
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <ul className={Styles.links}>
        {visibleOtherLinks.map(
          (link, index) =>
            //is active?
            link.active && (
              <li key={index}>
                <Link
                  href={link.url}
                  target={link.internalPage ? '_self' : '_blank'}
                  rel={link.internalPage ? 'prefetch' : 'noopener'}
                  title={link.text}>
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            )
        )}
        {otherLinks.length > limitOfLinks && (
          <li>
            <button
              onClick={handleToggle}
              aria-expanded={showMore ? 'true' : 'false'}
              aria-label={showMore ? 'Show less' : 'Show more'}>
              {showMore ? <IconLess /> : <IconMore />}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Links
