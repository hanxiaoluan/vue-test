<template>
	<form @submit.prevent="submit">
		<input type="email" v-model="form.email" />
		<textarea name="" id="" cols="30" rows="10" v-model="form.description"></textarea>
		<select v-model="form.city">
			<option value="new-york">New York</option>
			<option value="moscow">Moscow</option>
		</select>
		<input type="checkbox" v-model="form.subscribe" />
		<input type="radio" value="weekly" v-model="form.interval" />
		<input type="radio" value="monthly" v-model="form.interval" />

		<button @click="submit">Submit</button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            form: {
                email: '',
                description: '',
                city: '',
                subscribe: false,
                interval: ''
            }
        }
    },
    emits: ['submit'],
    methods: {
        submit() {
            this.$emit('submit', this.form)
        }
    }
})
</script>
