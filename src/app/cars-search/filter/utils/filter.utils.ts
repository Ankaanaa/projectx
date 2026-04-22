import { userSelectionInFilter } from '../../page'

export const filterAddParam = <K extends keyof userSelectionInFilter>(
  key: K,
  value: userSelectionInFilter[K] extends (infer U)[] ? U : never,
  prev: userSelectionInFilter
) => {
  return {
    ...prev,
    [key]: [...prev[key], value],
  }
}
//TODO логику для добавление цен и года выпуска, а так же их удаление

export const filterDeleteParam = <K extends keyof userSelectionInFilter>(
  key: K,
  value: userSelectionInFilter[K] extends (infer U)[] ? U : never,
  prev: userSelectionInFilter
) => {
  const TargetIndex = prev[key].findIndex((item) => item === value)
  const copyArr = prev[key]
  const newArr = copyArr.filter((_, index) => index !== TargetIndex)
  return {
    ...prev,
    [key]: newArr,
  }
}

export const filterClearParams = () => {
  return {
    brand: [],
    model: [],
    priceRanges: [],
    releaseYearRanges: [],
    classCar: [],
    isElectric: [],
    transmissionType: [],
    motorType: [],
  }
}

export const filterAddRangeParam = (
  key: keyof deleteFilterRange,
  prev: userSelectionInFilter,
  range: { min: number | null; max: number | null }
) => {
  return {
    ...prev,
    [key]: [...prev[key], range],
  }
}

interface range {
  min: number | null
  max: number | null
}

export interface deleteFilterRange {
  priceRanges: { min: number | null; max: number | null }[]
  releaseYearRanges: { min: number | null; max: number | null }[]
}
export const filterDeleteRangeParam = (
  key: keyof deleteFilterRange,
  prev: userSelectionInFilter,
  range: { min: number | null; max: number | null }
) => {
  const newArr = prev[key].filter(
    (el: range) => el.min !== range.min && el.max !== range.max
  )
  return {
    ...prev,
    [key]: newArr,
  }
}
//TODO логику для добавление цен и года выпуска, а так же их удаление
