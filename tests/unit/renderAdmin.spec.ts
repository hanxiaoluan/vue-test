import { mount } from '@vue/test-utils'
import Nav from '../../src/components/Nav.vue'

test('renders an admin link', () => {
    const wrapper = mount(Nav, {
        data() {
            return {
                admin: true
            }
        }
    })

    expect(wrapper.get('#admin').text()).toEqual('Admin')
})
