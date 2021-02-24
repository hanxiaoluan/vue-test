<template>
	<CustomInput v-model="input" label="Text Input" class="text-input" />
</template>

<script>
import { defineComponent } from 'vue'
import CustomInput from './CustomInput.vue'

export default defineComponent({
    components: { CustomInput },
    data() {
        return {
            input: ''
        }
    }
})
</script>
