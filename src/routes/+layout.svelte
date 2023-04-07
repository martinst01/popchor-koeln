<script lang="ts">
    import { Construction } from 'lucide-svelte';
    import '../app.postcss';
    import type { LayoutData } from './$types';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import Navigation from './Navigation.svelte';

    let openNavigation: () => void;

    export let data: LayoutData;
</script>

{#if data.showMaintenance}
    <div class="fixed inset-0 flex flex-col items-center justify-center gap-6 font-heading">
        <Construction />
        <h1 class="text-2xl font-bold">Wartungsarbeiten</h1>
    </div>
{:else}
    <Header {openNavigation} />

    <Navigation bind:openNavigation />

    <main>
        <slot />
    </main>

    <Footer />
{/if}
