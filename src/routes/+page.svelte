<script lang="ts">
	import type { PageData } from './$houdini';

	let { data }: { data: PageData } = $props();
	let { MyData } = $derived(data);

	let buddies = $derived($MyData.data?.Buddies?.docs ?? []);
</script>

<div class="relative min-h-screen pb-[133px]">
	{#if !$MyData.fetching}
		{#each buddies as buddy}
			<div class="m-4">
				<h1>ID: {buddy?.id}</h1>
				<h1>{buddy?.Vorname} {buddy?.Nachname}</h1>
			</div>
		{/each}
	{/if}
	<a class="underline" href="/other">Link to other page</a>
</div>
