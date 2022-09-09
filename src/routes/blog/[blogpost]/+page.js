export async function load({ params, routeId }) {
	const post = await import(`./${params.blogpost}.svelte`);
	return { params, routeId, post };
}
