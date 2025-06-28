<script>
	import { page } from '$app/state';
    import { setContext } from 'svelte';
	import './global.css';

	let { children } = $props();

	let shared = $state({ title: undefined });
	setContext('shared', shared);

	let paths = $derived.by(() => {
		if (page.url.pathname == "/") {
			return []
		} else {
			return page.url.pathname.split("/")
		}
	});
</script>

<nav>
	<p>
		{#if paths.length > 1}
			<button onclick={() => history.back()}>↩</button>
		{/if}
		{#each paths as folder, i}
			{#if i == paths.length - 1}
				{shared.title || folder}
			{:else if i == 0}
				<a href="/">home</a>
			{:else}
				<a href={paths.slice(0, i + 1).join("/")}>{folder}</a>
			{/if}
			{#if i < paths.length - 1}
				<span>·&nbsp;</span>
			{/if}
		{/each}
	</p>
</nav>

{@render children()}