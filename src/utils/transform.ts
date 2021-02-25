import { isNumber } from '@/utils/is'
export function camel(data: any): any {
    if (typeof data !== 'object' || !data) return data
    if (Array.isArray(data)) {
        return data.map(item => camel(item))
    }

    const newData = {} as any
    for (const key in data) {
        const newKey = key.replace(/_([a-z])/g, (p, m) => m.toUpperCase())
        newData[newKey] = camel(data[key])
    }
    return newData
}

export function underline(data: any): any {
    if (typeof data !== 'object' || !data) return data
    if (Array.isArray(data)) {
        return data.map(item => underline(item))
    }

    const newData = {} as any
    for (const key in data) {
        const newKey = key.replace(/([A-Z])/g, (p, m) => `_${m.toLowerCase()}`)
        newData[newKey] = underline(data[key])
    }
    return newData
}

export function tranformNum(num: number|string, decimals = 0, decimal = '.', separator = ',', suffix?: string, prefix?: string) {
    num = Number(num).toFixed(decimals)
    num += ''
    const x = num.split('.')
    let x1 = x[0]
    const x2 = x.length > 1 ? decimal + x[1] : ''
    const rgx = /(\d+)(\d{3})/
    if (separator && !isNumber(separator)) {
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + separator + '$2')
        }
    }

    return prefix + x1 + x2 + suffix
}
