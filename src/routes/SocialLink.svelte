<script lang="ts">
    import type { SvelteComponent } from 'svelte';

    export let link: string;
    export let icon: typeof SvelteComponent;
</script>

<a
    class="block rounded-full bg-slate-700 p-2 text-slate-200 focus-within:outline-offset-2 hover:bg-slate-500 active:bg-slate-500 sm:p-3"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
>
    <svelte:component this={icon} size="20" />
</a>
