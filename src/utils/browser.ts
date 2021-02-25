
const setDocumentTitle = (title: string) => {
    document.title = title

    const ua = navigator.userAgent
    const regex = /\bMicroMessenger\/([\d.]+)/

    // 兼容
    if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
        const i = document.createElement('iframe')
        i.src = '/favicon.ico'
        i.style.display = 'none'
        i.onload = function() {
            setTimeout(function() {
                i.remove()
            }, 9)
        }
        document.body.appendChild(i)
    }
}

export const setTitle = (title: string, appTitle?: string) => {
    const _title = title ? `${title}-${appTitle}` : `${appTitle}`

    setDocumentTitle(_title)
}
