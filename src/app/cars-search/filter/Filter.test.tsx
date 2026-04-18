jest.mock('./filterParams', () => ({
  FilterParams: {
    brandBlock: [
      { value: 'BMW', label: 'BMW' },
      { value: 'Audi', label: 'Audi' },
    ],
  },
}))
import { render, screen } from '@testing-library/react'
import React from 'react'
import Filter from './Filter'
describe('Filter component', () => {
  const brands = ['BMW', 'Audi']

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

  test('render brand block in filter', () => {
    render(
      <Filter userSelection={mockUserSelection} setUserSelection={jest.fn()} />
    )
    brands.forEach((brand) => {
      expect(screen.getByText(brand)).toBeInTheDocument()
    })
  })
})
