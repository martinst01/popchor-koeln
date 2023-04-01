<script lang="ts">
    export let link: string;
    export let icon: any;
</script>

<a
    class="block rounded-full bg-slate-700 p-2 text-slate-200 focus-within:outline-offset-2 sm:p-3"
    href={link}
    target="_blank"
    rel="noopener noreferrer"
>
    <svelte:component this={icon} size="20" />
</a>
