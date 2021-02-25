import { getCurrentInstance, onUnmounted, Slots } from 'vue'
import type { App } from 'vue'
import { isFunction } from '../is'

export function tryOnUnmountedFn(fn: () => Promise<void>|void) {
    getCurrentInstance() && onUnmounted(fn)
}

export function withInstall(...components: any[]) {
    components.forEach(comp => {
        comp.install = (app: App) => {
            app.component(comp.displayName || comp.name, comp)
        }
    })
}

export function getSlot(slots: Slots, slot = 'default', data?: any) {
    if (!slots || !Reflect.has(slots, slot)) return null

    if (!isFunction(slots[slot])) {
        console.error(`${slot} is not a function`)
        return null
    }

    const slotFn = slots[slot]

    if (!slotFn) return null
    return slotFn(data)
}
