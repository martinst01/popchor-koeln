<script lang="ts">
    export let enabled = false;
    export let screenReaderText: string;
</script>

<button
    type="button"
    class="
        inline-flex w-8 flex-none cursor-pointer rounded-full p-px transition-colors duration-100 ease-in-out
        focus-within:outline-slate-600 focus-visible:outline-offset-4
    "
    class:bg-accent={enabled}
    class:bg-slate-200={!enabled}
    role="switch"
    aria-checked={enabled}
    on:click={() => (enabled = !enabled)}
>
    <span class="sr-only">{screenReaderText}</span>
    <span
        aria-hidden="true"
        class="
            h-4 w-4 rounded-full bg-white transition duration-100 ease-in-out
            {enabled ? 'translate-x-3.5' : 'translate-x-0'}
        "
    />
</button>
