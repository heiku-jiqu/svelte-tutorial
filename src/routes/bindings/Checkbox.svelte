<script>
	let yes = false;
</script>

<label>
	<input type="checkbox" bind:checked={yes} />
	Yes! Send me spam!
</label>

{#if yes}
	<p>Thank you, we will send you spam</p>
{:else}
	<p>You must opt in to subscribe</p>
{/if}

<button disabled={!yes}>Subscribe</button>
