export const isString = (val: unknown): val is string => typeof val === 'string'

export const isNumber = (val: unknown) => typeof val === 'number'
export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export const isUrl = (path: string): boolean => {
    const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
    return reg.test(path)
}

export const isObject = (value: unknown) => {
    return value !== null && typeof value === 'object'
}

export const isBoolean = (value: unknown): value is boolean => {
    return typeof value === 'boolean'
}

export const isArray = <T = any>(val: unknown): val is Array<T> => Array.isArray(val)
