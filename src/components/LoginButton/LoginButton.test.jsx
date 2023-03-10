import { Router } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/store'
import LoginButton from './LoginButton'

describe('Attributes tests', () => {
    it('renders', () => {
        render(
            <Provider store={store}>
                <Router>
                    <LoginButton />
                </Router>
            </Provider>
        )

        expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })
})
