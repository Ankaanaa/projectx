import Image from 'next/image'
import style from '../style/voucher.module.scss'
import { Button } from './button'
export const Voucher = () => {
  return (
    <div className={style.voucher}>
      <div className={style.voucher__mainTitle}>Car rental voucher</div>
      <div className={style.voucher__container}>
        <div className={style.voucher__imageBlock}>
          <Image
            className={style.voucher__img}
            src={
              'https://i.postimg.cc/PqcjGZJY/wrapped-gifts-arrangement-with-copy-space-23-2148667050.avif'
            }
            alt='voucher'
            width={650}
            height={400}
          />
        </div>
        <div className={style.voucher__content}>
          <div className={style.voucher__title}>
            Looking for a gift idea for a loved one? <br />
            Is a birthday or other celebration approaching?
          </div>
          <div className={style.voucher__text}>
            Then you've come to the right place! <br />
            Our company offers gift vouchers for car rentals.
          </div>
          <Button
            link='#'
            text='Order a Voucher'
            isBlackFon={true}
            widthButton='300px'
            height='45px'
          />
        </div>
      </div>
    </div>
  )
}
