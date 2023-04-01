<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import ContactForm from './ContactForm.svelte';
    import NewsletterForm from './NewsletterForm.svelte';
</script>

<Section title="Kontakt">
    <NewsletterForm />

    <ContactForm classes="mt-6" />
</Section>
