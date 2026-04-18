import { validateValue } from './Filter'

describe('validate test', () => {
  test('validate test', () => {
    expect(validateValue(50)).toBe(true)
  })

  test('validate if 100', () => {
    expect(validateValue(100)).toBe(true)
  })

  test('validate if >', () => {
    expect(validateValue(150)).toBe(false)
  })

  test('validate if not number', () => {
    expect(validateValue('150')).toBe(false)
  })
})
