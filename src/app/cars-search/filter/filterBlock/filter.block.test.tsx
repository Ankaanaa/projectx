import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FilterBlockUI from './FilterBlock'
describe('filterBlockUI', () => {
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
  const filterMock = jest.fn()
  test('click on checkbox', async () => {
    const blockMock = [
      { value: 'BMW', label: 'BMW' },
      { value: 'MercedesBenz', label: 'Mercedes-Benz' },
      { value: 'Audi', label: 'Audi' },
      { value: 'Porsche', label: 'Porsche' },
    ]
    render(
      <FilterBlockUI
        filter={filterMock}
        Block={blockMock}
        userSelection={mockUserSelection}
        userSelectionKey='brand'
        nameBlock='Brands'
      />
    )

    const checkbox = screen.getAllByRole('checkbox')
    userEvent.click(checkbox[0])
    expect(filterMock).toHaveBeenCalled()
  })
})
