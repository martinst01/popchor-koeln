<script lang="ts">
    import { Facebook, Instagram, Mail, Youtube } from 'lucide-svelte';
    import SocialLink from './SocialLink.svelte';
</script>

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
