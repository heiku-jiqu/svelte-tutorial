<script>
	function resolveAfter2Seconds() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(Math.random());
			}, 2000);
		});
	}

	async function getRandomNumber() {
		const res = await resolveAfter2Seconds();
		console.log('number is ' + res);
		if (res > 0.9) {
			console.log(res);
			throw new Error('Number is more than 0.9!');
		} else {
			return res;
		}
	}

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>generate random number</button>
{#await promise}
	<p>... waiting ...</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
