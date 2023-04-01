<script lang="ts">
	import GigLine from './GigLine.svelte';

	export let title: string;
	export let time: string;
	export let place: string[];
	export let price: string;
	export let entryTime: string;

	let expanded = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="border-l-2 border-accent pl-2 py-1 cursor-pointer" on:click={() => (expanded = !expanded)}>
	<h3 class="text-lg font-bold" class:mb-2={expanded}>{title}</h3>

	{#if expanded}
		<GigLine label="Wann"><div class="font-bold">{time}</div></GigLine>
		<GigLine label="Wo">
			<div>
				{#each place as placeItem}
					<span class="block xs:inline xs:after:content-[',_'] xs:last:after:content-[]">{placeItem}</span>
				{/each}
			</div>
		</GigLine>
		<GigLine label="Preis">{price}</GigLine>
		<GigLine label="Einlass">{entryTime}</GigLine>

		<p class="mt-2 text-sm"><slot /></p>
	{:else}
		<p class="text-md">{time} @ {place[0]}</p>
	{/if}
</div>
