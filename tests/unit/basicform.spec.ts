import { mount } from '@vue/test-utils'
import BasicForm from '../../src/components/BasicForm.vue'

// test('sets the value', async() => {
//     const wrapper = mount(BasicForm)

//     const input = wrapper.find('input')

//     await input.setValue('my@email.com')

//     expect(input.element.value).toBe('my@email.com')

//     await wrapper.find('button').trigger('click')
//     expect(((wrapper.emitted('submit')[0]) as any)[0]).toBe('my@email.com')
// })

// test('trigger', async() => {
//     const wrapper = mount(BasicForm)

//     await wrapper.find('button').trigger('click')

//     expect(wrapper.emitted()).toHaveProperty('submit')
// })

test('submits a form', async() => {
    const wrapper = mount(BasicForm)

    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'moscow'

    await wrapper.find('input[type=email]').setValue('name@mail.com')
    await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet')
    await wrapper.find('select').setValue('moscow')
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type=radio][value=monthly]').setValue()

    await wrapper.find('form').trigger('submit.prevent')

    expect((wrapper.emitted('submit')[0] as any)[0]).toStrictEqual({
        email,
        description,
        city,
        subscribe: true,
        interval: 'monthly'
    })
})
