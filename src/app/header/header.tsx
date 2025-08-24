import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import './header.scss'
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
            <Link className='header__link' href={'#'}>
              Contact Us
            </Link>
            <button className='header__btn__2'>Booking car</button>
            <button className='header__btn'>
              Download App{' '}
              <FontAwesomeIcon
                className='header__downloadIcon'
                icon={faDownload}
              />
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
