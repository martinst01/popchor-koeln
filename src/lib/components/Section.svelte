<script lang="ts">
    export let id: string | null = null;
    export let title: string;
</script>

<section {id} class="container mx-auto my-8 p-4">
    <hgroup
        class="
            before:-z-1 relative mb-4 flex justify-center
            before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-slate-500
        "
    >
        <h2 class="relative bg-white px-8 text-3xl font-medium first-letter:text-accent">{title}</h2>
    </hgroup>

    <slot />
</section>
