'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { userSelectionInFilter } from '../page'
import './filter.scss'
import { FilterParams } from './filterParams'
interface IProps {
  setUserSelection: Dispatch<SetStateAction<userSelectionInFilter>>
  userSelection: userSelectionInFilter
}

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

const Filter = ({ userSelection, setUserSelection }: IProps) => {
  const [dataParamsCar, setDataParamsCar] = useState<Filter>(FilterParams)

  useEffect(() => {
    setDataParamsCar(FilterParams)
  }, [FilterParams])

  const setUserSelectionParamsInFilter = <
    K extends keyof userSelectionInFilter
  >(
    key: K,
    value: userSelectionInFilter[K]
  ) => {
    if (userSelection[key] === value) return ClearUserSelectionInFilter(key)

    setUserSelection((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const ClearUserSelectionInFilter = <K extends keyof userSelectionInFilter>(
    key: K
  ) => {
    setUserSelection((prev) => ({
      ...prev,
      [key]: null,
    }))
  }

  const FilterBrandBlock = dataParamsCar.brandBlock.map(
    (el: FilterBlock, index) => {
      return (
        <div key={el.value} className='filter__column'>
          <div className='filter__items'>
            <div
              className={`${
                userSelection.brand === el.value ? 'filter_checkboxActive' : ''
              } filter_checkbox`}
              onClick={() => setUserSelectionParamsInFilter('brand', el.value)}
            ></div>
            <div className='filter__value'>{el.label}</div>
          </div>
        </div>
      )
    }
  )
  return (
    <div className='filter'>
      <div className='filter__body'>{FilterBrandBlock}</div>
    </div>
  )
}

export default Filter
