import { defineAsyncComponent } from 'vue'
import { Spin } from 'ant-design-vue'
interface Options {
    size?: 'default'|'small'|'large';
    delay?: number;
    timeout?: number;
    loading?: boolean;
    retry?: boolean;
}

export function createAsyncComponent(loader: Fn, {
    size = 'small',
    delay = 100,
    timeout = 30000,
    loading = false,
    retry = true
}: Options = {}) {
    return defineAsyncComponent({
        loader,
        loadingComponent: loading ? <Spin spinning={true} size={size} /> : undefined,
        delay,
        timeout,
        onError: !retry ? () => {} : (error, retry, fail, attempts) => {
            if (error.message.match(/fetch/) && attempts <= 3) {
                retry()
            } else {
                fail()
            }
        }
    })
}
