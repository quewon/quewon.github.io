<script>
	let { data } = $props();
	let { metadata, content } = data;

	import { getContext } from 'svelte';
	getContext('shared').title = metadata?.title ? metadata.title : undefined;
</script>

<svelte:head>
	{#if metadata.title}
		<title>{metadata.title}</title>
	{/if}
</svelte:head>

<article>
	{#if metadata.source}
		<p>originally posted on <a href={metadata.source} target=_blank>{metadata['source-name']}</a></p>
		<hr>
	{/if}
	{@html content}
</article>