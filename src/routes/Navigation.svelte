<script lang="ts">
    import { browser } from '$app/environment';
    import { X } from 'lucide-svelte';

    let navigationExpanded = false;
    let tabIndexNav: number | null;

    $: if (browser) {
        navigationExpanded
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden');
    }

    $: tabIndexNav = navigationExpanded ? null : -1;

    export const toggleNavigation = () => {
        if (navigationExpanded) {
            navigationExpanded = false;
            history.back();
        } else {
            navigationExpanded = true;
            history.pushState(null, '', null);
        }
    };

    const onKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && navigationExpanded) {
            toggleNavigation();
        }
    };

    const onPopstate = () => {
        if (navigationExpanded) {
            navigationExpanded = false;
        }
    };
</script>

<svelte:window on:popstate={onPopstate} />
<svelte:body on:keydown={onKeydown} />

<nav
    class="fixed inset-0 z-10 bg-white/90 transition-transform duration-200 ease-in-out"
    class:-translate-y-full={!navigationExpanded}
>
    <div class="container relative mx-auto p-8">
        <ul class="flex flex-col gap-4 p-4">
            <li>
                <a tabindex={tabIndexNav} class="text-lg hover:text-accent active:text-accent" href="#chor">Chor</a>
            </li>
            <li>
                <a tabindex={tabIndexNav} class="text-lg hover:text-accent active:text-accent" href="#chorleiter"
                    >Chorleiter</a
                >
            </li>
            <li>
                <a tabindex={tabIndexNav} class="text-lg hover:text-accent active:text-accent" href="#termine"
                    >Termine</a
                >
            </li>
            <li>
                <a tabindex={tabIndexNav} class="text-lg hover:text-accent active:text-accent" href="#kontakt"
                    >Kontakt</a
                >
            </li>
        </ul>

        <button tabindex={tabIndexNav} class="absolute right-6 top-6 p-2" on:click={toggleNavigation}>
            <X class="hover:text-slate-500" size={32} />
        </button>
    </div>
</nav>
