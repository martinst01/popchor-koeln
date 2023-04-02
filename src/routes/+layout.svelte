<script lang="ts">
    import { browser } from '$app/environment';
    import imageHeader from '$lib/assets/header.png';
    import '@fontsource/open-sans';
    import { Facebook, Instagram, Mail, Menu, X, Youtube } from 'lucide-svelte';
    import '../app.postcss';
    import SocialLink from './SocialLink.svelte';

    let menuExpanded = false;

    $: if (browser) {
        menuExpanded
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden');
    }

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

<header
    class="
        bg-[#BBBAB5] bg-[length:40rem] bg-bottom bg-no-repeat p-8 pb-16
        sm:bg-[length:50rem] sm:pb-20
        md:bg-[length:60rem] md:pb-24
        lg:bg-[length:80rem] lg:pb-32
    "
    style="background-image: url('{imageHeader}'"
>
    <div class="container relative mx-auto">
        <a href="/">
            <h1 class="text-center text-4xl font-bold leading-[4rem]">
                d'acCHORd
                <small class="block text-2xl">heißt jetzt</small>
                popCHORköln
            </h1>
        </a>

        <button class="absolute -right-2 -top-2 p-2" on:click={toggleMenu}>
            <Menu class="text-accent" size={32} />
        </button>
    </div>
</header>

<nav
    class="fixed inset-0 z-10 bg-white/90 p-8 transition-transform duration-200 ease-in-out"
    class:-translate-y-full={!menuExpanded}
>
    <div class="container relative mx-auto">
        <ul class="flex flex-col gap-4 p-4">
            <li><a class="text-lg hover:text-accent active:text-accent" href="#chor">Chor</a></li>
            <li><a class="text-lg hover:text-accent active:text-accent" href="#chorleiter">Chorleiter</a></li>
            <li><a class="text-lg hover:text-accent active:text-accent" href="#termine">Termine</a></li>
            <li><a class="text-lg hover:text-accent active:text-accent" href="#kontakt">Kontakt</a></li>
        </ul>

        <button class="absolute -right-2 -top-2 p-2" on:click={toggleMenu}>
            <X class="hover:text-slate-500" size={32} />
        </button>
    </div>
</nav>

<slot />

<footer class="border-t border-slate-500 py-8">
    <div class="container mx-auto flex items-center justify-between px-4">
        <a class="flex-1 text-sm text-blue-700 hover:text-blue-900 focus:text-blue-900" href="/impressum">Impressum</a>

        <div class="flex gap-2 sm:gap-4">
            <SocialLink link="https://www.facebook.com/dacchord/" icon={Facebook} />
            <SocialLink link="mailto:info.dacchord@gmail.com" icon={Mail} />
            <SocialLink link="https://www.youtube.com/channel/UCT14OZsAo7IzRTJDFofQiQA" icon={Youtube} />
            <SocialLink link="https://www.instagram.com/dacchord/" icon={Instagram} />
        </div>

        <a class="flex-1 text-right text-sm text-blue-700 hover:text-blue-900 focus:text-blue-900" href="/datenschutz"
            >Datenschutz</a
        >
    </div>
</footer>
