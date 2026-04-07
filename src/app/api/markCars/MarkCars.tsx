import Image from 'next/image'
import './markCars.scss'
const markCars: mark[] = [
  { mark: 'bmw', link: 'https://i.postimg.cc/GpjLg1T0/bmwm.png' },
  { mark: 'audi', link: 'https://i.postimg.cc/3RcHzrKF/audip.png' },
  {
    mark: 'mercedesBenz',
    link: 'https://i.postimg.cc/Kzw8BDg2/mercedes.png',
  },
  {
    mark: 'volkswagen',
    link: 'https://i.postimg.cc/DyYb51kq/volkswagen.png',
  },
  { mark: 'tesla', link: 'https://i.postimg.cc/PfVxkh6V/pr.png' },
  {
    mark: 'lamborghini',
    link: 'https://i.postimg.cc/Ls09F3D3/lamborghinip.png',
  },
  { mark: 'porsche', link: 'https://i.postimg.cc/tRkrqvW0/porshep.png' },
]
interface mark {
  mark: string
  link: string
}
const MarkCars = () => {
  const mountingMarkElement = markCars.map((el: mark, index: number) => {
    return (
      <div className='marks__imageBlock' key={index}>
        <Image
          className='marks__image'
          src={el.link}
          alt={el.mark}
          width={150}
          height={200}
        />
      </div>
    )
  })
  return (
    <div className='marks'>
      <div className='marks__body'>{mountingMarkElement}</div>
    </div>
  )
}

export default MarkCars
