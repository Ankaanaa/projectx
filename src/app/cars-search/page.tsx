'use client'

import { useEffect, useState } from 'react'
import { Cars } from '../types/cars'
import CarList from './carsList/CarList'
import style from './carsSearch.module.scss'
import Filter from './filter/Filter'

//TODO Наверное параметры в поиске про день бронирования и конца как думаю нужно будет прокидывать сюда через пропсы, но как это реализовать? <- РЕАЛИЗОВАТЬ СЛЕДУЩЕЕ

//TODO Создать в этой папке папку динамическую [название машины] так как при клике на понравившися варинт будет загружаться та которую выбрал пользователь ну и api такой же динамический

export interface userSelectionInFilter {
  brand: string[]
  model: string[]
  priceRanges: { min: number | null; max: number | null }[]
  releaseYearRanges: { min: number | null; max: number | null }[]
  classCar: string[]
  isElectric: string[]
  transmissionType: string[]
  motorType: string[]
}
export default function CarsSearch() {
  const [dataCars, setDataCars] = useState<Cars | null>()
  const [userSelection, setUserSelection] = useState<userSelectionInFilter>({
    brand: [],
    model: [],
    priceRanges: [],
    releaseYearRanges: [],
    classCar: [],
    isElectric: [],
    transmissionType: [],
    motorType: [],
  })

  const GetDataCars = async () => {
    const fetchData = await fetch('/api/cars')
    const cars = await fetchData.json()
    if (!cars.ok) {
      setDataCars(null)
    }
    setDataCars(cars)
  }

  useEffect(() => {
    const hasFilters = Object.values(userSelection).some(
      (value) => value !== null && value !== undefined
    )
    if (hasFilters) {
      getFilterChangeDataCars()
    } else {
      GetDataCars()
    }
  }, [
    userSelection.brand.length,
    userSelection.classCar.length,
    userSelection.model.length,
    userSelection.isElectric.length,
    userSelection.priceRanges.length,
    userSelection.releaseYearRanges.length,
    userSelection.transmissionType.length,
    userSelection.motorType.length,
  ])

  //TODO есть роут под него но надо переделывать его полностью
  const getFilterChangeDataCars = async () => {
    const query = new URLSearchParams(
      Object.entries(userSelection)
        .filter(([_, value]) => value !== null && value !== undefined)
        .map(([key, value]) => [key, String(value)])
    ).toString()
    const fetchData = await fetch(`/api/cars/filter?${query}`)
    debugger
    const ChangeData: Cars = await fetchData.json()
    setDataCars(ChangeData)
  }
  return (
    <div className={style.carsSearch}>
      <div className={style.carsSearch__container}>
        <Filter
          userSelection={userSelection}
          setUserSelection={setUserSelection}
        />
        <CarList />
      </div>
    </div>
  )
}
