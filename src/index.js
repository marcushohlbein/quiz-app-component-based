import Header from './components/Header'
import Card from './components/Card'
import CreateForm from './components/CreateForm'
import Navigation from './components/Navigation'
import createElement from './lib/createElement'

const cards = []

const header = Header('Quiz App')

const navigation = Navigation(onNavigate)

const homePage = createElement('main', { className: 'HomePage', hidden: false })

const form = CreateForm(onSubmit)

const createPage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  form
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  header,
  homePage,
  createPage,
  navigation
)

document.body.append(grid)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  renderCards()
}

function renderCards() {
  const cardElements = cards.map(({ question, answer }) =>
    Card(question, answer)
  )
  homePage.innerHTML = ''
  homePage.append(...cardElements)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.hidden = false
    createPage.hidden = true
  }

  if (text === 'Create') {
    homePage.hidden = true
    createPage.hidden = false
  }
}
