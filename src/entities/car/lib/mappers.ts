import { Car } from '../api/types'
import { carCard } from '../model/types'

export const mapperExampleCar = (car: Car | null | undefined): carCard => {
  if (!car) {
    return {
      fullNameModel: 'Unknown model',
      description: 'no description available',
      photo: '/placeholder.png',
    }
  }
  return {
    fullNameModel: `${car.brand ?? 'Unknown brand'} ${
      car.model ?? 'Unknown model'
    }`,
    description: car.description ?? 'no description available',
    photo: car.photo ?? '/placeholder.png',
  }
}
