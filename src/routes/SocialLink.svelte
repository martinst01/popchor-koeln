<script lang="ts">
    export let link: string;
    export let icon: any;
</script>

<a
    class="bg-slate-700 block p-2 sm:p-3 text-slate-200 rounded-full focus-within:outline-offset-2"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
>
    <svelte:component this={icon} size="20" />
</a>
