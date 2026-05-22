import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
interface props {
  email?: 'email'
  location?: 'location'
}

const FooterFeedback = (props: props) => {
  return (
    <>
      <div className='footer__link'>
        <div className='footer__icon'>
          {props.email ? (
            <FontAwesomeIcon
              className='footer__img'
              icon={faEnvelope as IconProp}
            />
          ) : (
            props.location && (
              <FontAwesomeIcon
                className='footer__img'
                icon={faLocationDot as IconProp}
              />
            )
          )}
        </div>
        <Link className='footer__email' href='#'>
          {props.email
            ? 'info@projectx.com'
            : props.location && '201 Eugenie St, Winnipeg, MB R2H 0Y2, Canada'}
        </Link>
      </div>
    </>
  )
}

export default FooterFeedback
