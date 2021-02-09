import createElement from '../../lib/createElement'
import './Navigation'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/cog.svg'

const buttonsConfig = [
  { path: homeSVG, text: 'Home' },
  { path: bookmarkSVG, text: 'Bookmark' },
  { path: createSVG, text: 'Create New' },
  { path: settingsSVG, text: 'Settings' },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ path, text }) => {
    const button = createElement('img', { src: path, alt: text })
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)
  return el
}
