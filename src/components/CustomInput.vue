<template>
	<label for="">
		{{label}}
		<input type="text" name="" :value="modelValue" @input="$emit('update:modelValue',$event.tatget.value)"/>
	</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CustomInput',

    props: ['modelValue', 'label']
})
</script>
