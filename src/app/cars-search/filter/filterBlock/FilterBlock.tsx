import { userSelectionInFilter } from '../../page'
import { FilterBlock } from '../Filter'
type TFilterFn = (
  key: keyof userSelectionInFilter,
  action: 'add' | 'remove' | 'clear',
  value: string,
  range?: { min: number | null; max: number | null }
) => void

interface IProps<K extends keyof userSelectionInFilter> {
  userSelection: userSelectionInFilter
  Block: FilterBlock[]

  filter: TFilterFn

  userSelectionKey: K
  nameBlock: 'Motor' | 'Brands' | 'Transmission' | 'Electric'
}

type StringArrayKeys = {
  [K in keyof userSelectionInFilter]: userSelectionInFilter[K] extends string[]
    ? K
    : never
}[keyof userSelectionInFilter]

const FilterBlockUI = <K extends StringArrayKeys>({
  userSelection,
  Block,
  filter,
  userSelectionKey,
  nameBlock,
}: IProps<K>) => {
  const FilterGenerateUIBlock = Block.map((el: FilterBlock) => {
    const isSelected = userSelection[userSelectionKey].includes(el.value)
    return (
      <li className='filter__items filter__column' key={el.value}>
        <label className='checkbox'>
          <input
            type='checkbox'
            checked={isSelected}
            onChange={() =>
              filter(userSelectionKey, isSelected ? 'remove' : 'add', el.value)
            }
          />

          <span
            className={`filter__checkbox ${
              isSelected ? 'filter__checkboxActive' : ''
            }`}
          />
        </label>

        <div className='filter__value'>{el.label}</div>
      </li>
    )
  })

  return (
    <section>
      <h2>{nameBlock}</h2>
      {Block.length > 0 && <ul>{FilterGenerateUIBlock}</ul>}
    </section>
  )
}

export default FilterBlockUI
