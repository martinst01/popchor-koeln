<script lang="ts">
    import type { Gig } from '$lib/types';
    import GigEntry from './GigEntry.svelte';

    export let gigs: Gig[];
</script>

<div class="space-y-4">
    {#each gigs as { title, time, place, price, entryTime, description, linkTickets, link, linkText }}
        <GigEntry {title} {time} {place} {price} {entryTime} {linkTickets}>
            {#if link === undefined}
                {description}
            {:else}
                <span class="after:content-['>>>']">{description}</span>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-blue-500 hover:text-blue-700 focus:text-blue-700">{linkText}</a
                >
            {/if}
        </GigEntry>
    {/each}
</div>
