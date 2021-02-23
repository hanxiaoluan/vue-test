import { mount } from '@vue/test-utils'
import TodoApp from '../../src/components/TodoApp.vue'

test('creates a todo', async() => {
    const wrapper = mount(TodoApp)

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
})
