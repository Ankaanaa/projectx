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
    <div className={style.example}>
      <div className={style.example__photoOne}>
        <Image
          src={photoCar[0]}
          alt={props.car.fullNameModel}
          width={700}
          height={500}
          className={style.example__photo}
        />
      </div>
      <div className={style.example__photoTwoBlock}>
        <Image
          src={photoCar[1].trimStart()}
          alt={props.car.fullNameModel}
          width={700}
          height={500}
          className={style.example__photo}
        />

        <div className={style.example__carDescription}>
          <div className={style.example__name}>{props.car.fullNameModel}</div>
          <div className={style.example__line}></div>
          <div className={style.example__description}>
            {props.car.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExampleCar
