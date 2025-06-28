<script>
	let { href, children } = $props();
</script>

<style>
	.card {
		margin-bottom: .5em;
	}
	li::before {
        display: none;
    }
</style>

<li class="card">
	{@render children()}
</li>
