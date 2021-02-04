import createElement from '../lib/createElement'
import Button from './Button'
import './Card.css'

export default function Card(question, answer) {
  const el = createElement('section', { className: 'Card' })

  const questionEl = createElement('h2', { innerText: question })
  const button = Button('Show Answer')
  const answerEl = createElement('p', { innerText: answer, hidden: true })

  button.addEventListener('click', () => {
    answerEl.hidden = !answerEl.hidden
  })

  el.append(questionEl, button, answerEl)

  return el
}
