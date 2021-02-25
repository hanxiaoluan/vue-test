import { getPageQuery, openWindow } from '@/utils/utils'

beforeEach(() => {
    const mockUrl = new URL('http://www.baidu.com:8080/abc/bgh?a=123&b=345#dashboard')
    const open = jest.fn()

    Reflect.deleteProperty(window, 'location')
    Reflect.defineProperty(window, 'location', { value: { href: mockUrl.href }})

    Reflect.deleteProperty(window, 'open')
    Reflect.defineProperty(window, 'open', { value: open })
})

describe('getPageQuery', () => {
    it('get page query', () => {
        expect(getPageQuery()).toEqual({ a: '123', b: '345' })
    })
})

describe('openWindow test', () => {
    it('openWindow test', () => {
        openWindow('www.baidu.com', { target: '_self' })
        expect(window.open).toBeCalled()
        expect((window.open as jest.Mock).mock.calls.length).toBe(1)
        expect((window.open as jest.Mock).mock.calls[0][0]).toBe('www.baidu.com')
        expect((window.open as jest.Mock).mock.calls[0][1]).toBe('_self')
        expect((window.open as jest.Mock).mock.calls[0][2]).toBe('noopener=yes,noreferrer=yes')
        expect((window.open as jest.Mock).mock.results[0].value).toBe(undefined)
        expect((window.open as jest.Mock).mock.instances.length).toBe(1)
    })
})
