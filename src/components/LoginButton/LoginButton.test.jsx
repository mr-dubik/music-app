import { FormButton } from './LoginButton'
import { screen, render } from '@testing-library/react'

describe('<Button />', () => {
    describe('Snapshots tests', () => {
        it('should render successfully and match snapshot', () => {
            const { container } = render(<LoginButton>Click me</LoginButton>)

            expect(container).toMatchSnapshot()
        })
    })

    describe('Attributes tests', () => {
        it('should set type="button" by default', () => {
            render(<FormButton>Click me</FormButton>)

            expect(screen.getByText('Click me')).toHaveAttribute(
                'type',
                'button'
            )
        })
    })
})
