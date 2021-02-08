import Card from './components/Card'
import Header from './components/Header'

const header = Header('Quiz', 'may the best win!')
const card = Card('Say your Name', 'Marcus')

document.body.append(header, card)
