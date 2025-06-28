<script>
	let { data } = $props();

	import { getContext } from 'svelte';
	getContext('shared').title = undefined;
</script>

<svelte:head>
	<title>q1's projects</title>
</svelte:head>

<ul>
	{#each data.posts as post}
		<li>
			{#if post.post.metadata?.redirect}
				<a href={post.post.metadata.redirect} target="_blank">
					({post.post.metadata?.date.replaceAll("/", ".")}) {post.post.metadata?.title}
				</a>
			{:else}
				<a href={post.path}>
					({post.post.metadata?.date.replaceAll("/", ".")}) {post.post.metadata?.title}
				</a>
			{/if}
		</li>
	{/each}
</ul>