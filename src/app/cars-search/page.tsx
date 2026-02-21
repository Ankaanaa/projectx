'use client'

import { useEffect, useState } from 'react'
import { Cars } from '../types/cars'
import style from './carsSearch.module.scss'

//TODO Наверное параметры в поиске про день бронирования и конца как думаю нужно будет прокидывать сюда через пропсы, но как это реализовать?Еще не знаю. ЕЩе не уверен нужно ли в useEffect добавлять зависимости от выбора пользователя?Скорее нет чем да, он будет отображать все машины если пользователь очистил фильтр.  Так в api будет происходить фильтрация данных от выбора пользователя

//Создать в этой папке папку динамическую [название машины] так как при клике на понравившися варинт будет загружаться та которую выбрал пользователь ну и api такой же динамический

interface userSelectionInFilter {
  brand: string | null
  model: string | null
  releaseYear: number | null
  priceMax: number | null
  priceMin: number | null
  classCar: string | null
  isElectric: boolean | null
}
export default function CarsSearch() {
  const [dataCars, setDataCars] = useState<Cars | null>()
  const [userSelection, setUserSelection] = useState<userSelectionInFilter>({
    brand: null,
    model: null,
    releaseYear: null,
    priceMax: null,
    priceMin: null,
    classCar: null,
    isElectric: null,
  })

  const GetDataCars = async () => {
    const fetchData = await fetch('/api/cars')
    const cars: Cars = await fetchData.json()
    if (!cars) {
      setDataCars(null)
    }
    setDataCars(cars)
  }

  useEffect(() => {
    if (
      userSelection.brand ||
      userSelection.classCar ||
      userSelection.isElectric ||
      userSelection.model ||
      userSelection.priceMax ||
      userSelection.priceMin ||
      userSelection.releaseYear
    ) {
      getFilterChangeDataCars()
    } else {
      GetDataCars()
    }
  }, [
    userSelection.brand,
    userSelection.classCar,
    userSelection.model,
    userSelection.isElectric,
    userSelection.priceMax,
    userSelection.priceMin,
    userSelection.releaseYear,
  ])

  const getFilterChangeDataCars = async () => {
    const fetchData = await fetch(
      `/api/cars/filter?brand=${userSelection.brand}&model=${userSelection.model}&releaseYear=${userSelection.releaseYear}&priceMax=${userSelection.priceMax}&priceMin=${userSelection.priceMin}$classCar=${userSelection.classCar}&isElectric=${userSelection.isElectric}`
    )
    const ChangeData: Cars = await fetchData.json()
    setDataCars(ChangeData)
  }

  return (
    <div className={style.carsSearch}>
      <div></div>
    </div>
  )
}
