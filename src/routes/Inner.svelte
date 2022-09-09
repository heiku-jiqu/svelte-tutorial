<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('myevent', {
			text: 'Hello!'
		});
	}
</script>

<button on:click={sayHello}> click to say hello </button>
