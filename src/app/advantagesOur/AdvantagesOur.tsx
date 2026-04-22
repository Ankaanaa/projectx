import Image from 'next/image'
import './advantages.scss'

interface info {
  title: string
  text: string
}

const blockInfo: info[] = [
  {
    title: 'Unbeatable Price',
    text: 'We offer top-quality vehicles at prices that truly stand out',
  },
  {
    title: 'High Quality',
    text: 'Every car is carefully selected and regularly maintained to ensure top-tier quality',
  },
  {
    title: '24/7 Support',
    text: 'Our support team is available around the clock to assist you anytime',
  },
  {
    title: 'Unlimited Miles',
    text: 'Drive as far as you want without worrying about mileage limits',
  },
]
const AdvantagesOur = () => {
  const CreationBlockInfo = blockInfo.map((el: info, index) => {
    return (
      <article key={index} className='advantages__block'>
        <h2 className='advantages__block__title'>{el.title}</h2>
        <p className='advantages__block__text'>{el.text}</p>
      </article>
    )
  })

  return (
    <section className='advantages'>
      <h1 className='advantages__title'>
        Ride To Destinations <br />
        With Maximum Comfort
      </h1>
      <div className='advantages__p'>
        Experience effortless travel with modern cars designed for comfort and
        style. <br />
        Every journey is crafted to deliver elegance, safety, and relaxation.
      </div>
      <div className='advantages__body'>{CreationBlockInfo}</div>
      <div className='advantages__Fon'>
        <Image
          className='advantages__photo'
          src={'https://i.postimg.cc/KYNQFQwP/photofon.jpg'}
          alt='fon'
          width={1400}
          height={700}
        />
      </div>
    </section>
  )
}

export default AdvantagesOur
