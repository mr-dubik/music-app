import { screen, render, describe, expect, it } from '@testing-library/react'
import FormButton from './LoginButton'

describe('Attributes tests', () => {
    it('should set type="button" by default', () => {
        render(<FormButton> Войти</FormButton>)

        expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })
})
