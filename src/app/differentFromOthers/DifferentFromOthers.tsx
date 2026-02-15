import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faCircleCheck,
  faClipboard,
  faCreditCard,
  faGears,
  faGlobe,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactElement } from 'react'
import style from './different.module.scss'
interface differentObject {
  title: string
  text: string
  icon: ReactElement
}

const different: differentObject[] = [
  {
    title: 'Flexible bookings',
    text: 'Possibility of delivery and return of the car anywhere in Italy.',
    icon: (
      <FontAwesomeIcon
        className={style.different__icon}
        icon={faLocationDot as unknown as IconProp}
      />
    ),
  },
  {
    title: 'Ready to travel',
    text: 'All vehicles undergo regular maintenance and upgrades at the dealers specialized service centers.',
    icon: (
      <FontAwesomeIcon
        className={style.different__icon}
        icon={faCircleCheck as unknown as IconProp}
      />
    ),
  },
  {
    title: 'We work throughout Italy',
    text: 'Select a city and time, and we will deliver the car to the specified address at a time convenient for you.',
    icon: (
      <FontAwesomeIcon
        className={style.different__icon}
        icon={faGlobe as unknown as IconProp}
      />
    ),
  },
  {
    title: 'Rent without deposit',
    text: 'Pay online with your credit card and rent a car without a deposit.',
    icon: (
      <FontAwesomeIcon
        className={style.different__icon}
        icon={faCreditCard as unknown as IconProp}
      />
    ),
  },
  {
    title: 'Simple conditions',
    text: 'We keep formalities to a minimum. We offer simple terms and transparent rules. Signing a contract takes just 5 minutes.',
    icon: (
      <FontAwesomeIcon
        className={style.different__icon}
        icon={faClipboard as unknown as IconProp}
      />
    ),
  },
  {
    title: 'Maintenance',
    text: 'Drive with peace of mind and worry-free. Rental cars are fully serviced. Insurance: OSAGO, CASCO, and accident insurance are included in the price.',
    icon: (
      <FontAwesomeIcon
        className={style.different__icon}
        icon={faGears as unknown as IconProp}
      />
    ),
  },
]
const DifferentFromOthers = () => {
  const CreationBlockDifferent = different.map(
    (el: differentObject, index: number) => {
      return (
        <div key={index} className={style.different__body__block}>
          <div className={style.different__iconBlock}>{el.icon}</div>
          <div className={style.different__body__title}>{el.title}</div>
          <div className={style.different__body__text}>{el.text}</div>
        </div>
      )
    }
  )
  return (
    <div className={style.different}>
      <div className={style.different__block}>
        <div className={style.different__title}>What makes us different</div>
        <div className={style.different__text}>
          / Explore our unique services and see why ProjectX is the leader in
          premium car rentals in Italy.
        </div>
      </div>
      <div className={style.different__body}>{CreationBlockDifferent}</div>
    </div>
  )
}

export default DifferentFromOthers
