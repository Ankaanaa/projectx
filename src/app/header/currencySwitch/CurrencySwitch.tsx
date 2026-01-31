'use client'

import { useEffect, useState } from 'react'

import { Cars, Meta } from '@/app/types/cars'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './currency.module.scss'
const CurrencySwitch = () => {
  const [meta, setMeta] = useState<Meta | null>(null)
  const [isModalActive, setIsModalActive] = useState<boolean>(false)

  useEffect(() => {
    getMeta()
  }, [])

  const getMeta = async () => {
    const fetchMeta = await fetch('/api/cars')
    const data: Cars = await fetchMeta.json()

    setMeta(data.meta)
  }
  const SwitchCurrency = async (currency: Meta) => {
    await fetch('/api/cars', {
      method: 'PATCH',
      body: JSON.stringify(currency),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    await getMeta()
    setIsModalActive(false)
    if (!meta) return null
  }
  return (
    <div className={style.body}>
      {meta?.isCurrencyDollar ? (
        <div
          className={style.body__currency}
          onClick={() => setIsModalActive(!isModalActive)}
        >
          US$
          <FontAwesomeIcon icon={faAngleDown as unknown as IconProp} />
        </div>
      ) : (
        <div
          className={style.body__currency}
          onClick={() => setIsModalActive(!isModalActive)}
        >
          EUR
          <FontAwesomeIcon icon={faAngleDown as unknown as IconProp} />
        </div>
      )}
      {isModalActive && (
        <div className={style.modal}>
          <div
            onClick={() =>
              SwitchCurrency({
                isCurrencyEuro: false,
                isCurrencyDollar: true,
              })
            }
            className={style.modal__dollarBody}
          >
            {/* <input
              type='checkbox'
              disabled={meta?.isCurrencyDollar}
              checked={meta?.isCurrencyDollar}
              readOnly
            />{' '} */}
            <div className={style.modal__currency}>US$</div>
          </div>
          <div
            onClick={() =>
              SwitchCurrency({
                isCurrencyEuro: true,
                isCurrencyDollar: false,
              })
            }
            className={style.modal__euroBody}
          >
            {/* <input
              disabled={meta?.isCurrencyEuro}
              type='checkbox'
              checked={meta?.isCurrencyEuro}
              readOnly
            />{' '} */}
            <div className={style.modal__currency}>EUR</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CurrencySwitch
