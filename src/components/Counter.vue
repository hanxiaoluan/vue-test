<template>
	<div>
		<button @click="handleClick">Increment</button>
		<button @click="decrement">decrement</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            count: 0
        }
    },
    emits: ['increment', 'decrement'],
    methods: {
        handleClick() {
            this.count += 1
            this.$emit('increment', this.count)
        },
        decrement() {
            this.count -= 1
            this.$emit('decrement', {
                count: this.count,
                isEven: this.count % 2 === 0
            })
        }
    }
})
</script>
