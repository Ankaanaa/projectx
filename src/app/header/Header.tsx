'use client'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import CurrencySwitch from './currencySwitch/CurrencySwitch'
import './header.scss'
import Search from './search/Search'
const Header = () => {
  return (
    <header className='header'>
      <div className='header__body'>
        <div className='header__column'>
          <h1 className='header__name'>
            Project<span className='header__span'>X</span>
          </h1>
        </div>
        <div className='header__column'>
          <nav className='header__nav'>
            <Link className='header__link' href={'#'}>
              Home
            </Link>
            <Link
              className='header__link'
              data-testid='cars-search-link'
              href={'/cars-search'}
            >
              Cars Search
            </Link>
            <Link className='header__link' href={'#'}>
              About Us
            </Link>
            <Link className='header__link' href={'#'}>
              Blog
            </Link>
            <CurrencySwitch />
            <button className='header__btn__2'>Booking car</button>
            <div className='header__social'>
              <div className='header__circle'>
                <FontAwesomeIcon
                  className='header__icon'
                  icon={faInstagram as unknown as IconProp}
                />
              </div>
              <div className='header__circle'>
                {' '}
                <FontAwesomeIcon
                  className='header__icon'
                  icon={faFacebookF as unknown as IconProp}
                />
              </div>
              <div className='header__circle'>
                {' '}
                <FontAwesomeIcon
                  className='header__icon'
                  icon={faXTwitter as unknown as IconProp}
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Search />
    </header>
  )
}

export default Header
