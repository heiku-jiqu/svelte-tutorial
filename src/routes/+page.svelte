<script>
	import Assignments from './Assignments.svelte';
	import Info from './Info.svelte';
	import Nested from './Nested.svelte';
	import Login from './Login.svelte';
	import CatList from './CatList.svelte';
	import Await from './Await.svelte';
	import Inner from './Inner.svelte';

	let name = 'John Doe';
	let src = 'https://cdn.hswstatic.com/gif/now-a1206e17-134e-4a52-80e0-036e9c6d01b8-1210-680.jpg';
	let string = `this string contains some <strong>HTML!!!</strong>`;

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

	let mouse_position = { x: 0, y: 0 };
	let m = { x: 0, y: 0 };
	function handleMousemove(event) {
		mouse_position.x = event.clientX;
		mouse_position.y = event.clientY;
	}
	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<h1>Welcome to SvelteKit, {name.toUpperCase()}!</h1>
<Await />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{@html string}</p>
<img {src} alt="A man dances" />
<Nested answer="2" />
<Nested />
<Assignments />
<Info {...pkg} />
<Login />
<CatList />
<div on:mousemove={handleMousemove}>
	The mouse position is {mouse_position.x}, {mouse_position.y}
</div>

<div on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
	The mouse position is {m.x}, {m.y}
</div>

<!--Handlers can have modifiers by adding pipes-->
<!--can chain multiple modifiers with more pipes on:click|once|capture|blah -->
<button on:click|once={() => alert('clicked')}>Only once! </button>
<Inner on:myevent={handleMessage} />

<!--
    Events are only bubbled up to parent component
    If you want to access deeply nested dispatched events, you need to bubble them up one by one
    to do this, specify an empty on:myevent on the child component
    this will tell svelte to bubble up the event
    e.g. <Inner on:myevent />
    This works for DOM event too! e.gc. <Inner on:click /> will forward click events up
-->
<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
