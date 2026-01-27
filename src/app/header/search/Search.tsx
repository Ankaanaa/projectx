'use client'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { enGB } from 'date-fns/locale'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './search.scss'

const Search = () => {
  const [dateStart, setDateStart] = useState<Date | null>()
  const [timeStart, setTimeStart] = useState<Date | null>()
  const [dateEnd, setDateEnd] = useState<Date | null>()
  const [timeEnd, setTimeEnd] = useState<Date | null>()

  const checkChosenDateToday = (date: Date | null) => {
    const todayDate = new Date()
    return (
      date?.getMonth() === todayDate.getMonth() &&
      date?.getFullYear() === todayDate.getFullYear() &&
      date?.getDate() === todayDate.getDate()
    )
  }
  return (
    <div className='search'>
      <div className='search__body'>
        <div className='search__picker__body'>
          <DatePicker
            selected={dateStart}
            showMonthDropdown
            className='search__picker'
            wrapperClassName='search__start-wrapper'
            minDate={new Date()}
            onChange={(date: Date | null) => setDateStart(date)}
            dateFormat='EEE dd MMM'
          />
          <div className='search__span'>Pick-up date</div>
          <div className='search__calendar__body'>
            {' '}
            <FontAwesomeIcon
              icon={faCalendar as unknown as IconProp}
              className='search__calendar'
            />
          </div>
          <div className='search__bodyTime'>
            <DatePicker
              selected={timeStart}
              onChange={(time: Date | null) => setTimeStart(time)}
              showTimeSelect
              showTimeSelectOnly={true}
              timeIntervals={30}
              className='search__time'
              minTime={
                checkChosenDateToday(dateStart as Date | null)
                  ? new Date()
                  : new Date(new Date().setHours(0, 0, 0, 0))
              }
              maxTime={new Date(new Date().setHours(23, 30, 0, 0))}
              timeCaption='Time'
              dateFormat='HH:mm'
              locale={enGB}
            />
            <div className='search__timeSpan'>Time</div>
            <div className='search__time__body'>
              <FontAwesomeIcon icon={faClock as unknown as IconProp} />
            </div>
          </div>
        </div>
        <div className='search__picker__body'>
          <DatePicker
            selected={dateEnd}
            showMonthDropdown
            className='search__picker'
            wrapperClassName='search__start-wrapper'
            minDate={dateStart ? dateStart : new Date()}
            onChange={(date: Date | null) => setDateEnd(date)}
            dateFormat='EEE dd MMM'
            filterDate={(date) => {
              if (checkChosenDateToday(date)) return false
              if (!dateStart) return true
              return !(
                date.getFullYear() === dateStart.getFullYear() &&
                date.getMonth() === dateStart.getMonth() &&
                date.getDate() === dateStart.getDate()
              )
            }}
          />
          <div className='search__span'>Drop-off date</div>
          <div className='search__calendar__body'>
            {' '}
            <FontAwesomeIcon
              icon={faCalendar as unknown as IconProp}
              className='search__calendar'
            />
          </div>
          <div className='search__bodyTime'>
            <DatePicker
              selected={timeEnd}
              onChange={(time: Date | null) => setTimeEnd(time)}
              showTimeSelect
              showTimeSelectOnly={true}
              timeIntervals={30}
              className='search__time'
              minTime={new Date(new Date().setHours(0, 0, 0, 0))}
              maxTime={new Date(new Date().setHours(23, 30, 0, 0))}
              timeCaption='Time'
              dateFormat='HH:mm'
              locale={enGB}
            />
            <div className='search__timeSpan'>Time</div>
            <div className='search__time__body'>
              <FontAwesomeIcon icon={faClock as unknown as IconProp} />
            </div>
          </div>
        </div>
        <button className='search__button'>Search</button>
      </div>
    </div>
  )
}

export default Search
