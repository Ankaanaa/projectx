import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Services.scss'
const Services = () => {
  return (
    <div className='services'>
      <div className='services__body'>
        <div className='services__block'>
          <div className='services__title'>SERVICES</div>
          <div className='services__text'>
            / Check out our cars and reserve your favorite now! Enjoy premium
            quality and comfort.
          </div>
        </div>
        <button className='services__btn'>
          Find out more{' '}
          <FontAwesomeIcon
            className='services__arrow'
            icon={faAngleRight as unknown as IconProp}
          />
        </button>
      </div>
      <div className='services__container'></div>
    </div>
  )
}

export default Services
