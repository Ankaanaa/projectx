import Link from 'next/link'
import './FooterBlockInfo.scss'

interface props {
  nameBlock: string
  links?: string[]
  button?: boolean
}

const FooterBlockInfo = (props: props) => {
  return (
    <section className='footerBlockInfo'>
      <h2 className='footerBlockInfo__name'>{props.nameBlock}</h2>
      <div className='footerBlockInfo__block'>
        {props.links && (
          <ul className='footerBlockInfo__ul'>
            {props.links.map((el: string, index: number) => {
              return (
                <li key={index}>
                  <Link href={'#'} className='footerBlockInfo__link'>
                    {el}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
        {props.button && (
          <>
            <p className='footerBlockInfo__desc'>
              Click the button and book a car for every taste and color
            </p>
            <button className='footerBlockInfo__btn'>Rent a car</button>
          </>
        )}
      </div>
    </section>
  )
}

export default FooterBlockInfo
