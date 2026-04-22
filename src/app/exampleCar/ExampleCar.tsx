import Image from 'next/image'
import style from './exampleCar.module.scss'

interface props {
  car: {
    fullNameModel: string
    description: string
    photo: string
  }
}
const ExampleCar = (props: props) => {
  const photoCar = props.car.photo.split(',')
  return (
    <article className={style.example}>
      <figure className={style.example__photoOne}>
        <Image
          src={photoCar[0]}
          alt={props.car.fullNameModel}
          width={700}
          height={500}
          className={style.example__photo}
        />
      </figure>
      <figure className={style.example__photoTwoBlock}>
        <Image
          src={photoCar[1].trimStart()}
          alt={props.car.fullNameModel}
          width={700}
          height={500}
          className={style.example__photo}
        />

        <div className={style.example__carDescription}>
          <h2 className={style.example__name}>{props.car.fullNameModel}</h2>
          <div className={style.example__line}></div>
          <p className={style.example__description}>{props.car.description}</p>
        </div>
      </figure>
    </article>
  )
}

export default ExampleCar
