jest.mock('./filterParams', () => ({
  FilterParams: {
    brandBlock: [
      { value: 'BMW', label: 'BMW' },
      { value: 'Audi', label: 'Audi' },
    ],
  },
}))
import { userSelectionInFilter } from '../page'
import {
  filterAddParam,
  filterAddRangeParam,
  filterClearParams,
  filterDeleteParam,
  filterDeleteRangeParam,
} from './utils/filter.utils'
// describe('UI Filter component test', () => {
//   const brands = ['BMW', 'Audi']

//   const mockUserSelection: userSelectionInFilter = {
//     brand: [],
//     model: [],
//     priceRanges: [{ min: null, max: null }],
//     releaseYearRanges: [{ min: null, max: null }],
//     classCar: [],
//     isElectric: [],
//     transmissionType: [],
//     motorType: [],
//   }
//   function Wrapper() {
//     const [state, setState] = useState(mockUserSelection)

//     return <Filter userSelection={state} setUserSelection={setState} />
//   }

//   test('render brand block in filter', () => {
//     render(
//       <Filter userSelection={mockUserSelection} setUserSelection={jest.fn()} />
//     )
//     brands.forEach((brand) => {
//       expect(screen.getByText(brand)).toBeInTheDocument()
//     })
//     expect(brands.length).toBe(2)
//   })

//   test('checkbox is active if brand selected', () => {
//     const setUserSelectionMock = jest.fn()
//     render(
//       <Filter
//         userSelection={{
//           ...mockUserSelection,
//           brand: ['BMW'],
//         }}
//         setUserSelection={setUserSelectionMock}
//       />
//     )
//     const checkbox = screen.getAllByTestId('checkbox')[0]
//     // userEvent.click(checkbox[0])
//     expect(checkbox).toHaveClass('filter__checkboxActive')
//   })

//   test('click event on checkbox', () => {
//     const mockSetUserSelection = jest.fn()
//     render(
//       <Filter
//         userSelection={mockUserSelection}
//         setUserSelection={mockSetUserSelection}
//       />
//     )
//     const checkbox = screen.getAllByTestId('checkbox')[0]
//     userEvent.click(checkbox)
//     expect(mockSetUserSelection).toHaveBeenCalled()
//   })

//   test(' user click event and change active/non-active for checkbox', async () => {
//     render(<Wrapper />)
//     const checkbox = screen.getAllByTestId('checkbox')[0]
//     await userEvent.click(checkbox)
//     expect(checkbox).toHaveClass('filter__checkboxActive', 'filter__checkbox')
//     await userEvent.click(checkbox)
//     expect(checkbox).not.toHaveClass('filter__checkboxActive')
//   })
// })

// describe('Behavior Filter component', () => {
//   const mockUserSelection: userSelectionInFilter = {
//     brand: [],
//     model: [],
//     priceRanges: [{ min: null, max: null }],
//     releaseYearRanges: [{ min: null, max: null }],
//     classCar: [],
//     isElectric: [],
//     transmissionType: [],
//     motorType: [],
//   }
//   function Wrapper() {
//     const [state, setState] = useState(mockUserSelection)
//     const filterMock = jest.fn()
//     return <Filter userSelection={state} setUserSelection={setState} />
//   }
// })

describe('filter logic', () => {
  const mockUserSelectionWithOutParams: userSelectionInFilter = {
    brand: [],
    model: [],
    priceRanges: [],
    releaseYearRanges: [],
    classCar: [],
    isElectric: [],
    transmissionType: [],
    motorType: [],
  }
  const mockUserSelectionWithParam: userSelectionInFilter = {
    brand: ['BMW'],
    model: [],
    priceRanges: [],
    releaseYearRanges: [],
    classCar: [],
    isElectric: [],
    transmissionType: [],
    motorType: ['electric'],
  }
  const mockUserSelectionWithPriceRange: userSelectionInFilter = {
    brand: [],
    model: [],
    priceRanges: [{ min: 0, max: 50 }],
    releaseYearRanges: [],
    classCar: [],
    isElectric: [],
    transmissionType: [],
    motorType: [],
  }

  test('add filter param', () => {
    expect(
      filterAddParam('brand', 'BMW', mockUserSelectionWithOutParams)
    ).toEqual({
      brand: ['BMW'],
      model: [],
      priceRanges: [],
      releaseYearRanges: [],
      classCar: [],
      isElectric: [],
      transmissionType: [],
      motorType: [],
    })
  })

  test('delete filter param', () => {
    expect(
      filterDeleteParam('brand', 'BMW', mockUserSelectionWithParam)
    ).toEqual({
      brand: [],
      model: [],
      priceRanges: [],
      releaseYearRanges: [],
      classCar: [],
      isElectric: [],
      transmissionType: [],
      motorType: ['electric'],
    })
  })

  test('clear filter params', () => {
    expect(filterClearParams()).toEqual(mockUserSelectionWithOutParams)
  })

  test('add Price range in filter', () => {
    const rangeMock = {
      min: 50,
      max: 100,
    }

    expect(
      filterAddRangeParam(
        'priceRanges',
        mockUserSelectionWithPriceRange,
        rangeMock
      )
    ).toEqual({
      brand: [],
      model: [],
      priceRanges: [
        { min: 0, max: 50 },
        { min: 50, max: 100 },
      ],
      releaseYearRanges: [],
      classCar: [],
      isElectric: [],
      transmissionType: [],
      motorType: [],
    })
  })
  test('delete price range in filter', () => {
    const mockWithPriceRange: userSelectionInFilter = {
      brand: [],
      model: [],
      priceRanges: [
        { min: 0, max: 50 },
        { min: 50, max: 100 },
      ],
      releaseYearRanges: [],
      classCar: [],
      isElectric: [],
      transmissionType: [],
      motorType: [],
    }
    expect(
      filterDeleteRangeParam('priceRanges', mockWithPriceRange, {
        min: 0,
        max: 50,
      })
    ).toEqual({
      brand: [],
      model: [],
      priceRanges: [{ min: 50, max: 100 }],
      releaseYearRanges: [],
      classCar: [],
      isElectric: [],
      transmissionType: [],
      motorType: [],
    })
  })
  test('add release years param in filter', () => {
    expect(
      filterAddRangeParam('releaseYearRanges', mockUserSelectionWithOutParams, {
        min: 2000,
        max: 2010,
      })
    ).toEqual({
      brand: [],
      model: [],
      priceRanges: [],
      releaseYearRanges: [{ min: 2000, max: 2010 }],
      classCar: [],
      isElectric: [],
      transmissionType: [],
      motorType: [],
    })
  })
  test('delete release years param in filter', () => {
    const mockWithYearsRange: userSelectionInFilter = {
      brand: [],
      model: [],
      priceRanges: [],
      releaseYearRanges: [
        { min: 2000, max: 2010 },
        { min: 2010, max: 2020 },
      ],
      classCar: [],
      isElectric: [],
      transmissionType: [],
      motorType: [],
    }
    expect(
      filterDeleteRangeParam('releaseYearRanges', mockWithYearsRange, {
        min: 2010,
        max: 2020,
      })
    ).toEqual({
      brand: [],
      model: [],
      priceRanges: [],
      releaseYearRanges: [{ min: 2000, max: 2010 }],
      classCar: [],
      isElectric: [],
      transmissionType: [],
      motorType: [],
    })
  })

  test('delete non-existing param does nothing', () => {
    const result = filterDeleteParam(
      'brand',
      'BMW',
      mockUserSelectionWithOutParams
    )

    expect(result).toEqual(mockUserSelectionWithOutParams)
  })
})
