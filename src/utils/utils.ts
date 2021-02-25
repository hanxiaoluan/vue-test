import qs from 'qs'
import { isArray, isString } from './is'
export const getPageQuery = () => {
    const url = new URL(location.href)

    return qs.parse(url.search.split('?')[1])
}

export function openWindow(
    url: string,
    opt?: {target?: '_self'|'_blank';noopener?: boolean;noreferrer?: boolean}
) {
    const { target = '_blank', noopener = true, noreferrer = true } = opt || {}
    const feature: string[] = []

    noopener && feature.push('noopener=yes')
    noreferrer && feature.push('noreferrer=yes')
    window.open(url, target, feature.join(','))
}

export const removePageQuery = (query: string|string[]) => {
    if (!isString(query) && !isArray(query)) {
        throw new Error('暂不支持此格式')
    }

    const searchParams: URLSearchParams = new URLSearchParams(window.location.search.substring(1))
    if (isString(query)) {
        searchParams.has(query) && searchParams.delete(query)
        location.search = searchParams.toString()
        return true
    }
    if (isArray(query)) {
        query.forEach(item => {
            searchParams.has(item) && searchParams.delete(item)
        })
        location.search = searchParams.toString()
        return
    }
}
