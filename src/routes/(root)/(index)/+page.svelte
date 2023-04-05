<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import GigList from '$lib/components/gigs/GigList.svelte';
    import { gigs } from '$lib/data/gigs';
    import { ChevronRight } from 'lucide-svelte';
    import Contact from './Contact.svelte';

    const gigCount = 5;
</script>

<svelte:head>
    <title>Startseite - popCHORköln</title>
</svelte:head>

<Section id="chor" title="Chor">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor nihil unde, natus reiciendis possimus
        velit magni voluptatum reprehenderit iure, similique odio ullam maxime corrupti qui itaque ad, repellendus
        perspiciatis exercitationem. Labore facilis voluptas numquam aliquid quibusdam possimus odit eos explicabo
        vitae, odio dolor doloremque fuga eveniet consequatur! Dolore soluta cupiditate asperiores recusandae minima id
        quisquam corrupti ratione deleniti dolorem libero magnam laudantium voluptate animi sit aliquid similique
        provident, maxime eius, molestias error omnis excepturi quasi? Facilis accusantium ipsa soluta, perspiciatis
        saepe, eos repellendus aperiam blanditiis inventore eveniet modi dolorem? Laboriosam nulla voluptate at odit,
        quos ipsum atque aut repudiandae sunt impedit fuga corporis repellat suscipit blanditiis quod sint ipsam,
        accusamus quis laudantium rem modi, velit autem totam? Sit eum neque maiores sequi expedita laborum libero
        officiis saepe totam dolore ratione voluptatibus, et vel pariatur. Obcaecati commodi ipsa nam laudantium.
        Placeat ullam illum suscipit, dolore sit repudiandae id non eveniet!
    </p>
</Section>

<Section id="chorleiter" title="Chorleiter">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor nihil unde, natus reiciendis possimus
        velit magni voluptatum reprehenderit iure, similique odio ullam maxime corrupti qui itaque ad, repellendus
        perspiciatis exercitationem. Labore facilis voluptas numquam aliquid quibusdam possimus odit eos explicabo
        vitae, odio dolor doloremque fuga eveniet consequatur! Dolore soluta cupiditate asperiores recusandae minima id
        quisquam corrupti ratione deleniti dolorem libero magnam laudantium voluptate animi sit aliquid similique
        provident, maxime eius, molestias error omnis excepturi quasi? Facilis accusantium ipsa soluta, perspiciatis
        saepe, eos repellendus aperiam blanditiis inventore eveniet modi dolorem? Laboriosam nulla voluptate at odit,
        quos ipsum atque aut repudiandae sunt impedit fuga corporis repellat suscipit blanditiis quod sint ipsam,
        accusamus quis laudantium rem modi, velit autem totam? Sit eum neque maiores sequi expedita laborum libero
        officiis saepe totam dolore ratione voluptatibus, et vel pariatur. Obcaecati commodi ipsa nam laudantium.
        Placeat ullam illum suscipit, dolore sit repudiandae id non eveniet!
    </p>
</Section>

<Section id="termine" title="Termine">
    <GigList gigs={gigs.slice(0, gigCount)} />

    {#if gigs.length > gigCount}
        <div class="mt-2 flex items-center justify-end">
            <a href="/termine" class="inline-flex text-sm text-blue-500 hover:text-blue-700 focus:text-blue-700">
                Zu allen Termine <ChevronRight class="inline" size={20} />
            </a>
        </div>
    {/if}
</Section>

<Contact />
