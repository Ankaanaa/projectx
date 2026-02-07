import { Cars } from '@/app/types/cars'
import { mapperExampleCar } from '@/entities/car/lib/mappers'
import Image from 'next/image'
import AdvantagesOur from './advantagesOur/AdvantagesOur'
import MarkCars from './api/markCars/MarkCars'
import ExampleCar from './exampleCar/ExampleCar'
import style from './main.module.scss'
import RunningLine from './runningLine/RunningLine'
import Services from './services/Services'

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/cars', {
    cache: 'no-cache',
  })
  const cars: Cars = await res.json()

  const carExampleOne = mapperExampleCar(cars.cars[2])
  const carExampleTwo = mapperExampleCar(cars.cars[4])

  return (
    <div className={style.home}>
      <div className={style.home__photoBlock}>
        <Image
          className={style.home__photo}
          src={'https://i.postimg.cc/jS0shwXt/thumb-1920-898158.jpg'}
          width={1400}
          height={700}
          alt='fon photo'
        />
        <div className={style.home__infoBlock}>
          <div className={style.home__title}>
            Discover Your <br />
            Perfect Car For Trip
          </div>
          <div className={style.home__infoBlockTwo}>
            <div className={style.home__text}>
              It is a long established fact that a reader will be distracted{' '}
              <br />
              by the readable content of a a page when looking at its <br />
              layout
            </div>
            <div className={style.home__btns}>
              <button className={style.home__btnOne}>Book Now</button>
              <button className={style.home__btnTwo}>How it Works</button>
            </div>
          </div>
        </div>
      </div>
      <MarkCars />
      <AdvantagesOur />
      <RunningLine />
      <Services />
      <ExampleCar car={carExampleOne} />
      <ExampleCar car={carExampleTwo} />
    </div>
  )
}
