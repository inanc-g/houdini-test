<script lang="ts">
	import type { PageData } from './$houdini';

	let { data }: { data: PageData } = $props();
	let { OtherData } = $derived(data);

	let genres = $derived($OtherData.data?.Genres?.docs ?? []);
</script>

<div class="relative min-h-screen pb-[133px]">
	{#if !$OtherData.fetching}
		{#each genres as genre}
			<div class="m-4">
				<h1>ID: {genre?.id}</h1>
				<h1>{genre?.Name}</h1>
			</div>
		{/each}
	{/if}
	<a class="underline" href="/">Back to previous page</a>
</div>
