<script lang="ts">
    import GigList from '$lib/components/gigs/GigList.svelte';
    import Section from '$lib/components/Section.svelte';
    import { gigs } from '$lib/data/gigs';
</script>

<svelte:head>
    <title>Termine - popCHORköln</title>
</svelte:head>

<Section title="Alle Termine">
    <GigList {gigs} />
</Section>
