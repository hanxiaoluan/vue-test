import { isString, isNumber, isFunction, isUrl, isObject, isBoolean, isArray } from '@/utils/is'

describe('isString', () => {
    it('test isString arg is string', () => {
        expect(isString('luanhanxiaodahaoren')).toBe(true)
    })
    it('test isNumber return true', () => {
        expect(isNumber(0)).toBe(true)
    })
    it('test isFunction return true', () => {
        expect(isFunction(() => {})).toBe(true)
    })
    it('test isUrl return true', () => {
        expect(isUrl('www.baidu.com')).toBe(true)
    })
    it('test isObject return true', () => {
        expect(isObject({})).toBe(true)
    })
    it('test isBoolean return true', () => {
        expect(isBoolean(false)).toBe(true)
    })
    it('test isArray return true', () => {
        expect(isArray([])).toBe(true)
    })
})
