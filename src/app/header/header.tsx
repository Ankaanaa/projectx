import Link from 'next/link'
import CurrencySwitch from './currencySwitch/CurrencySwitch'
import './header.scss'
import Search from './search/Search'
const Header = () => {
  return (
    <header className='header'>
      <div className='header__body'>
        <div className='header__column'>
          <div className='header__name'>
            Project<span className='header__span'>X</span>
          </div>
        </div>
        <div className='header__column'>
          <nav className='header__nav'>
            <Link className='header__link' href={'#'}>
              Home
            </Link>
            <Link className='header__link' href={'#'}>
              Category
            </Link>
            <Link className='header__link' href={'#'}>
              About Us
            </Link>
            <Link className='header__link' href={'#'}>
              Blog
            </Link>
            <CurrencySwitch />
            <button className='header__btn__2'>Booking car</button>
          </nav>
        </div>
      </div>
      <Search />
    </header>
  )
}

export default Header
