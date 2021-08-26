<template>
	<i :class="`wang-icon-${name}`"></i>
</template>

<script>
	export default {
		name: "WIcon",
		props: {
			name: String,
		},
	};
</script>
