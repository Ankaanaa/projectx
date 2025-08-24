import Link from 'next/link'
import './FooterBlockInfo.scss'

interface props {
  nameBlock: string
  links?: string[]
  button?: boolean
}

const FooterBlockInfo = (props: props) => {
  return (
    <div className='footerBlockInfo'>
      <div className='footerBlockInfo__name'>{props.nameBlock}</div>
      <div className='footerBlockInfo__block'>
        {props.links &&
          props.links.map((el: string, index: number) => {
            return (
              <Link href={'#'} className='footerBlockInfo__link' key={index}>
                {el}
              </Link>
            )
          })}
        {props.button && (
          <>
            <div className='footerBlockInfo__desc'>
              Click the button and book a car for every taste and color
            </div>
            <button className='footerBlockInfo__btn'>Rent a car</button>
          </>
        )}
      </div>
    </div>
  )
}

export default FooterBlockInfo
