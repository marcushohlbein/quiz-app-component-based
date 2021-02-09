import createElement from '../../lib/createElement'
import Card from '../Card'
import './Homepage.css'

export default function HomePage(cards) {
  const el = createElement('main', { className: 'HomePage', hidden: false })

  cards && setCards(cards)

  function setCards(cards) {
    const cardElements = cards.map(({ question, answer }) =>
      Card(question, answer)
    )
    el.innerHTML = ''
    el.append(...cardElements)
  }

  function hide() {
    el.hidden = true
  }

  function show() {
    el.hidden = false
  }

  return {
    el,
    setCards,
    show,
    hide,
  }
}
