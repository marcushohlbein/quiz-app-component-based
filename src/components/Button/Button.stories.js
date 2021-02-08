import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const base = () => Button('Click me')
export const longText = () => Button('This is a very long Text.')
