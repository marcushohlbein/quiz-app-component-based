import Header from './components/Header'
import CreateForm from './components/CreateForm'
import Navigation from './components/Navigation'
import createElement from './lib/createElement'
import HomePage from './components/HomePage'

const cards = []

const header = Header('Quiz App')

const navigation = Navigation(onNavigate)

const homePage = HomePage()

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
  homePage.setCards(cards)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.show()
    createPage.hidden = true
    header.setText('Home')
  }

  if (text === 'Create') {
    homePage.hide()
    createPage.hidden = false
    header.setText('Create Cards')
  }
}
