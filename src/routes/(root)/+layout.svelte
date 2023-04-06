<script lang="ts">
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import Navigation from './Navigation.svelte';

    let openNavigation: () => void;
</script>

<Header {openNavigation} />

<Navigation bind:openNavigation />

<slot />

<Footer />
