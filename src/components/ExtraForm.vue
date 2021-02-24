<template>
	<form>
		<input type="text" name="" v-model="value" @blur="handleBlur" />
		<button>Submit</button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Form',
    data() {
        return {
            value: ''
        }
    },
    methods: {
        handleBlur(event:MouseEvent) {
            if ((event.relatedTarget as any).tagName === 'BUTTON') {
                this.$emit('focus-lost')
            }
        }
    }
})
</script>
