import createElement from '../../lib/createElement'
import CreateForm from '../CreateForm'
import './CreatePage.css'

export default function CreatePage(onSubmit) {
  const form = CreateForm(onSubmit)

  const el = createElement(
    'main',
    { className: 'CreatePage', hidden: true },
    form
  )

  function hide() {
    el.hidden = true
  }

  function show() {
    el.hidden = false
  }

  return {
    el,
    show,
    hide,
  }
}
