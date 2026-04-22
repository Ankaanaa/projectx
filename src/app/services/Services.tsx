import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleRight,
  faCameraRetro,
  faCar,
  faRing,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import './Services.scss'

const servicesBlocks: service[] = [
  {
    title: 'Airport and domestic transfers',
    text: 'Book an airport transfer to catch your flight or get to your destination',
    element: (
      <FontAwesomeIcon
        className='service__icon'
        icon={faSuitcase as unknown as IconProp}
      />
    ),
  },
  {
    title: 'Car rental for photo and video shoots',
    text: 'Car rental for photo and video shoots',
    element: (
      <FontAwesomeIcon
        className='service__icon'
        icon={faCameraRetro as unknown as IconProp}
      />
    ),
  },
  {
    title: 'Car rental',
    text: 'Meeting the client anywhere and planning the most optimal route.',
    element: (
      <FontAwesomeIcon
        className='service__icon'
        icon={faCar as unknown as IconProp}
      />
    ),
  },
  {
    title: 'Car rental for a wedding',
    text: 'Professional limousine transportation for weddings',
    element: (
      <FontAwesomeIcon
        className='service__icon'
        icon={faRing as unknown as IconProp}
      />
    ),
  },
]
interface service {
  title: string
  text: string
  element: ReactElement
}
const Services = () => {
  const creationServiceBlock = servicesBlocks.map(
    (el: service, index: number) => {
      return (
        <article className='service__body' key={index}>
          <div className='service__blockImg'>{el.element}</div>
          <h2 className='service__title'>{el.title}</h2>
          <p className='service__text'>{el.text}</p>
        </article>
      )
    }
  )
  return (
    <section className='services'>
      <div className='services__body'>
        <div className='services__block'>
          <h1 className='services__title'>SERVICES</h1>
          <p className='services__text'>
            / Check out our cars and reserve your favorite now! Enjoy premium
            quality and comfort.
          </p>
        </div>
        <button className='services__btn'>
          Find out more{' '}
          <FontAwesomeIcon
            className='services__arrow'
            icon={faAngleRight as unknown as IconProp}
          />
        </button>
      </div>
      <div className='services__container'>{creationServiceBlock}</div>
    </section>
  )
}

export default Services
