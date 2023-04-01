<script type="ts">
    import imageHeader from '$lib/assets/header.png';
    import '@fontsource/open-sans';
    import { Facebook, Instagram, Mail, Youtube } from 'lucide-svelte';
    import '../app.postcss';
    import SocialLink from './SocialLink.svelte';
</script>

<header
    class="
		mx-auto bg-[#BBBAB5] bg-[length:40rem] bg-bottom bg-no-repeat pb-16 pt-8
		sm:bg-[length:50rem] sm:pb-20
		md:bg-[length:60rem] md:pb-24
		lg:bg-[length:80rem] lg:pb-32
	"
    style="background-image: url('{imageHeader}'"
>
    <h1 class="text-center text-4xl font-bold leading-[4rem]">
        d'acCHORd
        <small class="block text-2xl">heißt jetzt</small>
        popCHORköln
    </h1>
</header>

<slot />

<footer class="border-t border-slate-600 py-8 mt-4 bg-[#BBBAB5]">
    <div class="container mx-auto flex justify-between px-4 items-center">
        <a class="text-blue-700 hover:text-blue-900 focus:text-blue-90 text-sm" href="/impressum">Impressum</a>

        <div class="flex gap-2 sm:gap-4">
            <SocialLink link="https://www.facebook.com/dacchord/" icon={Facebook} />
            <SocialLink link="mailto:info.dacchord@gmail.com" icon={Mail} />
            <SocialLink link="https://www.youtube.com/channel/UCT14OZsAo7IzRTJDFofQiQA" icon={Youtube} />
            <SocialLink link="https://www.instagram.com/dacchord/" icon={Instagram} />
        </div>

        <a class="text-blue-700 hover:text-blue-900 focus:text-blue-900 text-sm" href="/datenschutz">Datenschutz</a>
    </div>
</footer>
