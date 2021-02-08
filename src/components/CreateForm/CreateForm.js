import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm() {
  const el = createElement('form', {
    className: 'createForm',
    innerHTML: `
        <label for='question'>Question
        <input type='text' id='question' placeholder='Enter your Question'>
        </label>
        <label for='answer'>Answer
        <input type='text' id='answer' placeholder='Enter the Answer'>
        </label>
        <button type='submit'>Submit</button>
      `,
  })

  return el
}
