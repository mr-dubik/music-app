import { screen, render, describe, expect, it } from '@testing-library/react'
import FormButton from './LoginButton'

describe('Attributes tests', () => {
    it('should set type="button" by default', () => {
        render(<FormButton type="button"> Войти</FormButton>)

        expect(screen.getByText('Войти')).toHaveAttribute('type', 'button')
    })
})
