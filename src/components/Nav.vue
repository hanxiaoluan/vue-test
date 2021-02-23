<template>
	<nav>
		<a href="/profile" id="profile">My Profile</a>
		<a href="/admin" id="admin" v-if="admin">Admin</a>
		<ul v-show="shouldShowDropdown" id="user-dropdown">

		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Nav',
    data() {
        return {
            admin: false,
            shouldShowDropdown: false
        }
    }
})

</script>
