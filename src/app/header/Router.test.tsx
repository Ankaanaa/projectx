import { render, screen } from '@testing-library/react'
import Header from './Header'
const pushMock = jest.fn()
jest.mock('./search/Search', () => () => <div>SearchMock</div>)
jest.mock('./currencySwitch/CurrencySwitch', () => () => (
  <div>CurrencyMock</div>
))

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}))
describe('Routers UI', () => {
  test('cars-search page', async () => {
    render(<Header />)
    const carSearchLink = screen.getByTestId('cars-search-link')
    expect(carSearchLink).toHaveAttribute('href', '/cars-search')
    screen.debug()
  })
})
