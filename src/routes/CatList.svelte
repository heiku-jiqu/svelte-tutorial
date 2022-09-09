<script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<h1>The Faous Cats of YouTube</h1>
<ul>
    {#each cats as cat, i}
        <li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">{i+1}: {cat.name}</a></li>
    {/each}
    {#each cats as {id, name}, i}
        <li>{i+1}: {id} {name}</li>
    {/each}
</ul>