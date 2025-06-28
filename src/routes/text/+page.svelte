<script>
	let { data } = $props();

	import { getContext } from 'svelte';
	getContext('shared').title = undefined;
</script>

<svelte:head>
	<title>q1's writing</title>
</svelte:head>

<ul>
	<li><a href="https://quewon.github.io/pots/">pots (short interactive fiction practice)</a></li>
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