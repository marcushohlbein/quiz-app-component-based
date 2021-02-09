import createElement from '../../lib/createElement'
import './Navigation'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import bookmarkSVG from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import createSVG from '@fortawesome/fontawesome-free/svgs/solid/plus-square.svg'
import settingsSVG from '@fortawesome/fontawesome-free/svgs/solid/cog.svg'

const navigationItems = [
  { path: homeSVG, text: 'Home' },
  { path: bookmarkSVG, text: 'Bookmark' },
  { path: createSVG, text: 'Create New' },
  { path: settingsSVG, text: 'Settings' },
]

export default function Navigation(onNavigate) {
  const navigationButtons = navigationItems.map(({ path, text }) => {
    const navigationButton = createElement('img', { src: path, alt: text })
    navigationButton.addEventListener('click', () => onNavigate(text))
    return navigationButton
  })

  const el = createElement(
    'nav',
    { className: 'Navigation' },
    ...navigationButtons
  )
  return el
}
