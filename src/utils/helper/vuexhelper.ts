import store from '@/store'

export const hotModuleUnregisterModule = (name: string): void => {
    if (!name) return
    if ((store.state as any)[name]) {
        store.unregisterModule(name)
    }
}

