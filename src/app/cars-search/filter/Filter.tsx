'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { userSelectionInFilter } from '../page'
import './filter.scss'
import { FilterParams } from './filterParams'

interface IProps {
  setUserSelection: Dispatch<SetStateAction<userSelectionInFilter>>
  userSelection: userSelectionInFilter
}

//TODO ПЕРЕДЕЛАТЬ функции фильтра в массив для чекбоксов

export interface filterInfo {
  brand: string | null
  model: string | null
  releaseYearMin: number | null
  releaseYearMax: number | null
  priceMax: number | null
  priceMin: number | null
  classCar: string | null
  isElectric: boolean | null
  transmissionType: string | null
  motorType: string | null
}
interface Filter {
  brandBlock: FilterBlock[]
  classCarBlock: FilterBlock[]
  motorBlock: FilterBlock[]
  transmissionBlock: FilterBlock[]
  electricBlock: FilterElectricBlock[]
  priceBlock: FilterNumberDataBlock[]
  releaseYear: FilterNumberDataBlock[]
}

interface FilterBlock {
  value: string
  label: string
}
interface FilterElectricBlock {
  value: boolean
  label: string
}
interface FilterNumberDataBlock {
  value: {
    min: number
    max: number | null
  }
  label: string
}

interface ICarsInfo {
  cars: filterInfo[]
}
// удалить потом
export const validateValue = (value: unknown) => {
  if (typeof value !== 'number') {
    return false
  }
  if (value < 0 || value > 100) {
    return false
  }
  return true
}

const Filter = ({ userSelection, setUserSelection }: IProps) => {
  const [dataParamsCar, setDataParamsCar] = useState<Filter>(FilterParams)

  useEffect(() => {
    setDataParamsCar(FilterParams)
  }, [FilterParams])

  const filter = <K extends keyof userSelectionInFilter>(
    key: K,
    action: 'add' | 'remove' | 'clear',
    value: userSelectionInFilter[K] extends (infer U)[] ? U : never,
    range?: { min: number | null; max: number | null }
  ) => {
    switch (action) {
      case 'add':
        FilterAddParam(key, value)
        break
      case 'remove':
        filterDeleteParam(key, value)
        break
      case 'clear':
        filterClearParams()
        break
      default:
        console.log(`Sorry not found action ${action}`)
    }
  }
  const FilterAddParam = <K extends keyof userSelectionInFilter>(
    key: K,
    value: userSelectionInFilter[K] extends (infer U)[] ? U : never
  ) => {
    setUserSelection((prev) => ({
      ...prev,
      [key]: [...prev[key], value],
    }))
  }

  //Так то все понятно надо value просто поставить тип данных к примеру string так как у нас должна приходить значение а не массив, а не userSelectionInFilter[K]
  const filterDeleteParam = <K extends keyof userSelectionInFilter>(
    key: K,
    value: userSelectionInFilter[K] extends (infer U)[] ? U : never
  ) => {
    const index = userSelection[key].findIndex((item) => item === value)

    setUserSelection((prev) => {
      const copyArr = prev[key]
      copyArr.splice(index, 1)

      return {
        ...prev,
        [key]: copyArr,
      }
    })
  }
  console.log(userSelection)
  const filterClearParams = () => {
    setUserSelection({
      brand: [],
      model: [],
      priceRanges: [{ min: null, max: null }],
      releaseYearRanges: [{ min: null, max: null }],
      classCar: [],
      isElectric: [],
      transmissionType: [],
      motorType: [],
    })
  }

  const FilterBrandBlock = dataParamsCar.brandBlock.map(
    (el: FilterBlock, index) => {
      const isSelected = userSelection.brand.includes(el.value)
      return (
        <div key={el.value} className='filter__column'>
          <div className='filter__items'>
            <div
              className={`${
                isSelected ? 'filter_checkboxActive' : 'filter_checkbox'
              } filter_checkbox`}
              onClick={
                !isSelected
                  ? () => filter('brand', 'add', el.value)
                  : () => filter('brand', 'remove', el.value)
              }
            ></div>
            <div className='filter__value'>{el.label}</div>
          </div>
        </div>
      )
    }
  )
  return (
    <div className='filter'>
      <div className='filter__body'>
        <div className='filter__brandsBlock'>
          {dataParamsCar.brandBlock.length > 0 && FilterBrandBlock}
        </div>
      </div>
    </div>
  )
}

export default Filter
