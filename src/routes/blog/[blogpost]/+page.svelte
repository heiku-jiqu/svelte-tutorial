<script>
	export let data;
	console.log(data.post);
</script>

<p>{data.params}</p>
<p>{data.routeId}</p>
<svelte:component this={data.post.default} />
