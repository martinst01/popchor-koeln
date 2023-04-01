<script lang="ts">
    import { ChevronDown, ChevronRight } from 'lucide-svelte';
    import GigLine from './GigLine.svelte';

    export let title: string;
    export let time: string;
    export let place: string[];
    export let price: string;
    export let entryTime: string;

    let expanded = false;
    const toggle = () => (expanded = !expanded);
</script>

<div
    class="
		cursor-pointer border-l-2 border-accent py-1 pl-2
		focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600
	"
    on:click={toggle}
    on:keypress={toggle}
    role="button"
    tabindex="0"
>
    <h3 class="flex items-baseline text-lg font-bold" class:mb-2={expanded}>
        {#if expanded}
            <ChevronDown class="inline" size="16" />
        {:else}
            <ChevronRight class="inline" size="16" />
        {/if}
        {title}
    </h3>

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
