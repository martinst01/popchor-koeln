<script lang="ts">
    import { browser } from '$app/environment';
    import imageHeader160 from '$lib/assets/header-160px.png';
    import imageHeader240 from '$lib/assets/header-240px.png';
    import imageHeader320 from '$lib/assets/header-320px.png';
    import '@fontsource/open-sans';
    import { Facebook, Instagram, Mail, Menu, X, Youtube } from 'lucide-svelte';
    import '../app.postcss';
    import SocialLink from './SocialLink.svelte';

    let menuExpanded = false;
    let tabIndexNav: number | null;

    $: if (browser) {
        menuExpanded
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden');
    }

    $: tabIndexNav = menuExpanded ? null : -1;

    const toggleMenu = () => {
        if (menuExpanded) {
            menuExpanded = false;
            history.back();
        } else {
            menuExpanded = true;
            history.pushState(null, '', null);
        }
    };

    const onKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && menuExpanded) {
            toggleMenu();
        }
    };

    const onPopstate = () => {
        if (menuExpanded) {
            menuExpanded = false;
        }
    };
</script>

<svelte:window on:popstate={onPopstate} />
<svelte:body on:keydown={onKeydown} />

<header>
    <div class="container relative mx-auto p-8 pb-4">
        <a href="/">
            <h1 class="text-center text-4xl font-bold leading-[4rem]">
                d'acCHORd
                <small class="block text-2xl">heißt jetzt</small>
                popCHORköln
            </h1>
        </a>

        <button class="absolute right-6 top-6 p-2" on:click={toggleMenu}>
            <Menu class="text-accent" size={32} />
        </button>
    </div>

    <div class="flex h-[160px] justify-center sm:h-[240px] md:h-[320px]">
        <picture>
            <source media="(max-width: 639px)" srcset="{imageHeader160} 1x, {imageHeader320} 2x" />
            <source media="(min-width: 640px) and (max-width: 767px)" srcset={imageHeader240} />
            <source media="(min-width: 768px)" srcset={imageHeader320} />
            <img src={imageHeader320} alt="Header Bild von dem gesamten Chor" class="h-full object-cover" />
        </picture>
    </div>
</header>

<nav
    class="fixed inset-0 z-10 bg-white/90 transition-transform duration-200 ease-in-out"
    class:-translate-y-full={!menuExpanded}
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

        <button tabindex={tabIndexNav} class="absolute right-6 top-6 p-2" on:click={toggleMenu}>
            <X class="hover:text-slate-500" size={32} />
        </button>
    </div>
</nav>

<slot />

<footer class="border-t border-slate-500">
    <div class="container mx-auto flex flex-wrap items-center gap-y-4 p-8 sm:flex-nowrap sm:px-12 lg:px-20">
        <div class="flex w-full justify-center gap-4 sm:w-auto">
            <SocialLink link="https://www.facebook.com/dacchord/" icon={Facebook} />
            <SocialLink link="mailto:info.dacchord@gmail.com" icon={Mail} />
            <SocialLink link="https://www.youtube.com/channel/UCT14OZsAo7IzRTJDFofQiQA" icon={Youtube} />
            <SocialLink link="https://www.instagram.com/dacchord/" icon={Instagram} />
        </div>

        <div class="flex-1 sm:-order-1">
            <a class="text-sm text-blue-500 hover:text-blue-700 focus:text-blue-700" href="/impressum">Impressum</a>
        </div>

        <div class="flex flex-1 justify-end">
            <a class="text-sm text-blue-500 hover:text-blue-700 focus:text-blue-700" href="/datenschutz">Datenschutz</a>
        </div>
    </div>
</footer>
