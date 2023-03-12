// import { Router } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
// import { Provider } from 'react-redux'
// import store from '../../store/store'
import Button from './Button'

describe('Attributes tests', () => {
    it('Button renders', () => {
        render(<Button />)
        expect(screen.getByText('Войти')).toBeInTheDocument()
    })
})

describe('Attributes tests', () => {
    it('Button renders', () => {
        render(<Button />)
        expect(screen.getByText('Войти')).toHaveStyle({
            width: ' 278px',
            height: '52px',
        })
    })
})
