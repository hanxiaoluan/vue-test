import { mount } from '@vue/test-utils'
import Nav from '../../src/components/Nav.vue'

test('renders a profile link', () => {
    const wrapper = mount(Nav)

    const profileLink = wrapper.get('#profile')

    expect(profileLink.text()).toEqual('My Profile')
    expect(wrapper.find('#admin').exists()).toBe(false)
})

test('does not show the user dropdown', () => {
    const wrapper = mount(Nav)
    expect(wrapper.get('#user-dropdown').isVisible()).toBe(false)
})
