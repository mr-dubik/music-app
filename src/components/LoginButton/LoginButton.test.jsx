import { screen, render } from '@testing-library/react'
import FormButton from './LoginButton'

describe('Attributes tests', () => {
    it('should set type="button" by default', () => {
        render(<FormButton />)

        expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })
})
