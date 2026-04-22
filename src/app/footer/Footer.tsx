import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.scss'
import FooterBlockInfo from './footerBlockInfo/FooterBlockInfo'
import FooterFeedback from './footerFeedback/FooterFeedback'

const company = ['About Us', 'Services', 'Contact Us']
const companyService = ['Pricing Plan', 'Privacy Policy', 'Terms & Conditions']
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__body'>
        <section className='footer__column__1'>
          <div className='footer__items'>
            <div className='footer__name'>
              Project<span className='footer__span'>X</span>
            </div>
            <FooterFeedback email='email' />
            <FooterFeedback location='location' />
          </div>
        </section>
        <section className='footer__column__2'>
          <FooterBlockInfo nameBlock='Company' links={company} />
        </section>
        <section className='footer__column__3'>
          <FooterBlockInfo nameBlock='Company Service' links={companyService} />
        </section>
        <section className='footer__column__4'>
          <FooterBlockInfo nameBlock='Book with us' button={true} />
        </section>
      </div>
      <div className='footer__line'></div>
      <div className='footer__contacts'>
        <div>@2025 ProjectX All Rights are revers</div>
        <div className='footer__social'>
          <div className='footer__circle'>
            <FontAwesomeIcon
              className='footer__icon'
              icon={faInstagram as unknown as IconProp}
            />
          </div>
          <div className='footer__circle'>
            {' '}
            <FontAwesomeIcon
              className='footer__icon'
              icon={faFacebookF as unknown as IconProp}
            />
          </div>
          <div className='footer__circle'>
            {' '}
            <FontAwesomeIcon
              className='footer__icon'
              icon={faXTwitter as unknown as IconProp}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
