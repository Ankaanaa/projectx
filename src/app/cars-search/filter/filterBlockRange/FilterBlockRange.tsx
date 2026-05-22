import { userSelectionInFilter } from '../../page'
import { TFilterFn } from '../filterBlock/FilterBlock'

interface props {
  rangeNumbers: range[]
  filter: TFilterFn
  userSelection: userSelectionInFilter
}
interface range {
  value: { min: number | null; max: number | null }
  label: string
}

const FilterBlockRange = ({ rangeNumbers }: props) => {
  const createUIReleaseOrPriceBlock = rangeNumbers.map((el: range) => {
    return <div></div>
  })
  return (
    <div>
      <div></div>
    </div>
  )
}
