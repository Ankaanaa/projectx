import { userSelectionInFilter } from '../../page'
import { FilterBlock } from '../Filter'
export type TFilterFn = (
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
  nameBlock: 'Motor' | 'Brands' | 'Transmission' | 'Electric' | 'Range'
  rangeBlock?:
    | FilterBlock[]
    | {
        value: { min: number | null; max: number | null }
        label: string
      }[]
}
interface RangeBlock {
  value: { min: number | null; max: number | null }
  label: string
}
//TODO чтоб я мог проверку ключа сделать для цены и года то надо в extends помимо string[] добавлять { min: number | null; max: number | null }[] проверку так то сработало оно отображает теперь эти ключи для цены и года но теперь тс ругается за то что в includes не может быть number надо как-то пофиксить
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
  rangeBlock,
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

  /////////////

  function isRangeBlockArray(
    arr: FilterBlock[] | RangeBlock[]
  ): arr is RangeBlock[] {
    return typeof arr[0]?.value === 'object'
  }

  // const FilterGenerateUIBlockTwo = () => {
  //   if (
  //     rangeBlock &&
  //     'value' in rangeBlock[0] &&
  //     typeof rangeBlock[0].value === 'string'
  //   ) {
  //   }
  //   if (rangeBlock && isRangeBlockArray(rangeBlock)) {
  //     return rangeBlock.map((el: RangeBlock) => {
  //       if (userSelectionKey === '')
  //         return (
  //           <li>
  //             <label className='checkbox'>
  //               <input
  //                 type='checkbox'
  //                 checked={isSelected}
  //                 onChange={() =>
  //                   filter(
  //                     userSelectionKey,
  //                     isSelected ? 'remove' : 'add',
  //                     el.label,
  //                     el.value
  //                   )
  //                 }
  //               />

  //               <span
  //                 className={`filter__checkbox ${
  //                   isSelected ? 'filter__checkboxActive' : ''
  //                 }`}
  //               />
  //             </label>

  //             <div className='filter__value'>{el.label}</div>
  //           </li>
  //         )
  //     })
  //   }
  // }

  return (
    <section>
      <h2>{nameBlock}</h2>
      {Block && Block.length > 0 && <ul>{FilterGenerateUIBlock}</ul>}
    </section>
  )
}
export default FilterBlockUI
