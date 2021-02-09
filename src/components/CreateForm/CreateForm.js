import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const form = createElement('form', {
    className: 'createForm',
    innerHTML: `
        <label for='question'>
        Question
        <input type='text' id='question' placeholder='Enter your Question'>
        </label>
        <label for='answer'>
        Answer
        <input type='text' id='answer' placeholder='Enter the Answer'>
        </label>
        <button type='submit'>Submit</button>
      `,
  })

  form.addEventListener('submit', event => {
    event.preventDefault()
    const { question: questionInput, answer: answerInput } = form.elements
    const question = questionInput.value
    const answer = answerInput.value
    onSubmit(question, answer)
  })

  return form
}
