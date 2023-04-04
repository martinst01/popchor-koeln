<script lang="ts">
    import '@fontsource/open-sans';
    import '../app.postcss';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import Navigation from './Navigation.svelte';

    let toggleNavigation: () => void;
</script>

<Header {toggleNavigation} />

<Navigation bind:toggleNavigation />

<slot />

<Footer />
