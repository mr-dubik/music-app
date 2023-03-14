// import { Router } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
// import { Provider } from 'react-redux'
// import store from '../../store/store'
import Button from './Button'

describe('Text tests', () => {
    it('Text tests', () => {
        render(<Button />)
        expect(screen.getByText('Войти')).toBeInTheDocument()
    })
})

describe('Type tests', () => {
    it('Type tests', () => {
        render(<Button />)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
})
