import { mount } from '@vue/test-utils'
import Counter from '../../src/components/Counter.vue'

test('emits an event when clicked', () => {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')

    const incrementEvent = wrapper.emitted('increment')

    expect(incrementEvent).toHaveLength(2)
    expect(incrementEvent[0]).toEqual([1])
    expect(incrementEvent[1]).toEqual([2])
})

// test('emits an event with complex arguments',()=>{
//     const wrapper = mount(Counter)

//     wrapper.find('button').trigger('click')
//     wrapper.find('button').trigger('click')

//     const incrementEvent = wrapper.emitted('increment')
// })
