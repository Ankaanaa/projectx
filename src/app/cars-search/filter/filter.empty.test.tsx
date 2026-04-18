import { render, screen } from '@testing-library/react'
import Filter from './Filter'

jest.mock('./filterParams', () => ({
  FilterParams: {
    brandBlock: [],
  },
}))

describe('checking empty data in UI', () => {
  const mockUserSelection = {
    brand: [],
    model: [],
    priceRanges: [{ min: null, max: null }],
    releaseYearRanges: [{ min: null, max: null }],
    classCar: [],
    isElectric: [],
    transmissionType: [],
    motorType: [],
  }
  test('empty brand block', () => {
    render(
      <Filter userSelection={mockUserSelection} setUserSelection={jest.fn()} />
    )
    expect(screen.queryByText('BMW')).not.toBeInTheDocument()
    expect(screen.queryByText('Audi')).not.toBeInTheDocument()
    expect(screen.queryByText('BMW')).toBeNull()
  })
})
