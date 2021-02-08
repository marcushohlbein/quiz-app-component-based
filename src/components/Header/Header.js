import createElement from '../../lib/createElement'
import './header.css'

export default function Header(title, subtitle) {
  const el = createElement('header', { className: 'Header' })

  const titleEl = createElement('h1', {
    className: 'Header__title',
    innerHTML: title,
  })

  const subtitleEl = createElement('span', {
    className: 'Header__subtitle',
    innerHTML: subtitle,
  })

  el.append(titleEl, subtitleEl)

  return el
}
