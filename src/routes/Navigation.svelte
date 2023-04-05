<script lang="ts">
    import { browser } from '$app/environment';
    import { modalStore } from '$lib/modal';
    import { X } from 'lucide-svelte';

    let navigationModal = modalStore('navigation-open');
    let tabIndexNav: number | null;

    $: if (browser) {
        $navigationModal.isOpen
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden');
    }

    $: tabIndexNav = $navigationModal.isOpen ? null : -1;

    export const openNavigation = navigationModal.open;
</script>

<svelte:window on:popstate={navigationModal.onPopstate} />
<svelte:body on:keydown={navigationModal.onKeydown} />

<nav
    class="fixed inset-0 z-10 bg-white/90 transition-transform duration-200 ease-in-out"
    class:-translate-y-full={!$navigationModal.isOpen}
>
    <div class="container relative mx-auto p-8">
        <ul class="flex flex-col gap-4 p-4">
            <li>
                <a tabindex={tabIndexNav} class="text-lg hover:text-accent active:text-accent" href="/#chor">Chor</a>
            </li>
            <li>
                <a tabindex={tabIndexNav} class="text-lg hover:text-accent active:text-accent" href="/#chorleiter"
                    >Chorleiter</a
                >
            </li>
            <li>
                <a tabindex={tabIndexNav} class="text-lg hover:text-accent active:text-accent" href="/#termine"
                    >Termine</a
                >
            </li>
            <li>
                <a tabindex={tabIndexNav} class="text-lg hover:text-accent active:text-accent" href="/#kontakt"
                    >Kontakt</a
                >
            </li>
        </ul>

        <button tabindex={tabIndexNav} class="absolute right-6 top-6 p-2" on:click={navigationModal.close}>
            <X class="hover:text-slate-500" size={32} />
        </button>
    </div>
</nav>
