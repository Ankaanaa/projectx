export const FilterParams = {
  brandBlock: [
    { value: 'BMW', label: 'BMW' },
    { value: 'MercedesBenz', label: 'Mercedes-Benz' },
    { value: 'Audi', label: 'Audi' },
    { value: 'Porsche', label: 'Porsche' },
    { value: 'Lamborghini', label: 'Lamborghini' },
    { value: 'Tesla', label: 'Tesla' },
    { value: 'Honda', label: 'Honda' },
    { value: 'Ford', label: 'Ford' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'Nissan', label: 'Nissan' },
  ],
  priceBlock: [
    { value: { min: 0, max: 50 }, label: '0 - 50' },
    { value: { min: 50, max: 100 }, label: '50 - 100' },
    { value: { min: 100, max: 150 }, label: '100 - 150' },
    { value: { min: 150, max: 200 }, label: '150 - 200' },
    { value: { min: 200, max: null }, label: '200+' },
  ],
  classCarBlock: [
    { value: 'sedan', label: 'Sedan' },
    { value: 'E', label: 'E class' },
  ],
  motorBlock: [
    { value: 'electric', label: 'Electric' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'petrol', label: 'Petrol' },
  ],
  transmissionBlock: [
    { value: 'automatic', label: 'Automatic' },
    { value: 'robot', label: 'Robot' },
    { value: 'cvt', label: 'CVT' },
    { value: 'manual', label: 'Manual' },
  ],
  electricBlock: [
    { value: 'electric', label: 'Electric' },
    { value: 'non-electric', label: 'Non-electric' },
  ],
  releaseYear: [
    { value: { min: 2000, max: 2010 }, label: '2000 - 2010' },
    { value: { min: 2010, max: 2020 }, label: '2010 - 2020' },
    { value: { min: 2020, max: 2026 }, label: '2020 - 2026' },
  ],
}

// const SelectUserParams = (
//   param: string,
//   typeChange: string,
//   isElectric?: boolean
// ) => {
//   if (typeChange.toUpperCase() === 'BRAND') {
//     setUserSelectionParamsInFilter('brand', param)
//   } else if (typeChange.toUpperCase() === 'MODEL') {
//     setUserSelectionParamsInFilter('model', param)

//   } else if (typeChange.toUpperCase() === 'RELEASEYEAR') {
//     setUserSelectionParamsInFilter('releaseYear', parseInt(param, 10))
//   } else if (typeChange.toUpperCase() === 'CLASSCAR') {
//     setUserSelectionParamsInFilter('classCar', param)
//   } else if (typeChange.toUpperCase() === 'MOTORTYPE') {
//     setUserSelectionParamsInFilter('motorType', param)
//   } else if (typeChange.toUpperCase() === 'TRANSMISSIONTYPE') {
//     setUserSelectionParamsInFilter('transmissionType', param)
//   } else if (typeChange.toUpperCase() === 'PRICE') {
//     setUserSelection((prev) => ({
//       ...prev,
//       price: parseInt(param, 10),
//     }))
//   } else if (typeChange.toUpperCase() === 'ISELECTRIC') {
//     setUserSelection((prev) => ({
//       ...prev,
//       isElectric: isElectric as boolean,
//     }))
//   }
// }
