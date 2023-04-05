<script lang="ts">
    import '@fontsource/open-sans';
    import '../../app.postcss';
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
    import Navigation from './Navigation.svelte';

    let openNavigation: () => void;
</script>

<Header {openNavigation} />

<Navigation bind:openNavigation />

<slot />

<Footer />
