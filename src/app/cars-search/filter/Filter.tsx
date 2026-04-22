'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { userSelectionInFilter } from '../page'
import './filter.scss'
import FilterBlockUI from './filterBlock/FilterBlock'
import { FilterParams } from './filterParams'
import {
  deleteFilterRange,
  filterAddParam,
  filterAddRangeParam,
  filterClearParams,
  filterDeleteParam,
  filterDeleteRangeParam,
} from './utils/filter.utils'
interface IProps {
  setUserSelection: Dispatch<SetStateAction<userSelectionInFilter>>
  userSelection: userSelectionInFilter
}

export interface Filter {
  brandBlock: FilterBlock[]
  classCarBlock: FilterBlock[]
  motorBlock: FilterBlock[]
  transmissionBlock: FilterBlock[]
  electricBlock: FilterBlock[]
  priceBlock: FilterNumberDataBlock[]
  releaseYear: FilterNumberDataBlock[]
}

export interface FilterBlock {
  value: string
  label: string
}
interface FilterNumberDataBlock {
  value: {
    min: number
    max: number | null
  }
  label: string
}

const Filter = ({ userSelection, setUserSelection }: IProps) => {
  const [dataParamsCar, setDataParamsCar] = useState<Filter>(FilterParams)

  useEffect(() => {
    setDataParamsCar(FilterParams)
  }, [FilterParams])

  const filter = <K extends keyof userSelectionInFilter>(
    key: K,
    action: 'add' | 'remove' | 'clear' | 'addRange' | 'removeRange',
    value: userSelectionInFilter[K] extends (infer U)[] ? U : never,
    range?: { min: number | null; max: number | null }
  ) => {
    setUserSelection((prev) => {
      switch (action) {
        case 'add':
          return filterAddParam(key, value, prev)
        case 'remove':
          return filterDeleteParam(key, value, prev)
        case 'clear':
          return filterClearParams()
        case 'addRange':
          return filterAddRangeParam(
            key as keyof deleteFilterRange,
            prev,
            range as { min: number | null; max: number | null }
          )
        case 'removeRange':
          return filterDeleteRangeParam(
            key as keyof deleteFilterRange,
            prev,
            range as { min: number | null; max: number | null }
          )
        default:
          return prev
      }
    })
  }
  console.log(userSelection)
  return (
    <aside className='filter'>
      <div className='filter__body'>
        <FilterBlockUI
          filter={filter}
          userSelection={userSelection}
          Block={dataParamsCar.brandBlock}
          userSelectionKey='brand'
          nameBlock='Brands'
        />
        <FilterBlockUI
          filter={filter}
          userSelection={userSelection}
          Block={dataParamsCar.transmissionBlock}
          nameBlock='Transmission'
          userSelectionKey='transmissionType'
        />
        <FilterBlockUI
          filter={filter}
          nameBlock='Motor'
          userSelection={userSelection}
          Block={dataParamsCar.motorBlock}
          userSelectionKey='motorType'
        />
        <FilterBlockUI
          filter={filter}
          nameBlock='Electric'
          userSelection={userSelection}
          Block={dataParamsCar.electricBlock}
          userSelectionKey='isElectric'
        />
      </div>
    </aside>
  )
}

export default Filter
