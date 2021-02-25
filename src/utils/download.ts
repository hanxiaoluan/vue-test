import { openWindow } from './utils'
import { isUrl } from './is'
interface DownloadByUrlParams {
    url: string;
    params?: Record<string, any>;
    target?: '_blank'|'_self';
    fileName?: string;
}

// 转码参数
function encodeParams(params: Record<string, any>) {
    const _params = []
    for (const key in params) {
        const value = params[key]
        if (['', undefined, null].includes(value)) {
            continue
        }
        _params.push(key + '=' + encodeURIComponent(value))
    }
    return _params.length ? '?' + _params.join('&') : ''
}

export function downloadByUrl({
    url,
    params,
    target = '_blank',
    fileName
}: DownloadByUrlParams): boolean {
    const isChrome = window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1
    const isSafari = window.navigator.userAgent.toLowerCase().indexOf('safari') > -1
    if (/(iP)/g.test(window.navigator.userAgent)) {
        console.error('你的浏览器不支持下载')
        return false
    }
    if (!isUrl(url)) {
        url = process.env.VUE_APP_BASE_API + url
        if (url.indexOf('?') === -1 && params) {
            url += encodeParams(params)
        }
    }

    if (isChrome || isSafari) {
        const link = document.createElement('a')
        link.href = url
        link.target = target

        if (link.download !== undefined) {
            link.download = fileName || url.substring(url.lastIndexOf('/') + 1, url.length)
        }

        // 废弃了createEvent方法，以后改为Event构造函数

        const e = new MouseEvent('click', { bubbles: true, cancelable: true })
        link.dispatchEvent(e)
        return true
    }
    openWindow(url, { target })
    return true
}
