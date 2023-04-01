<script lang="ts">
    import Checkbox from './Checkbox.svelte';
</script>

<div class="space-y-2">
    <h3 class="text-lg font-bold">Newsletter</h3>

    <p>
        Trage dich in unseren Newsletter ein und bleibe so immer auf dem neusten Stand zu unseren Konzerten, Videos und
        Aktivitäten!
    </p>

    <form name="newsletter" data-netlify="true" class="space-y-3">
        <label class="block">
            <span class="text-xs font-bold uppercase tracking-wide text-slate-500">Deine Email:</span>
            <input
                type="email"
                name="email"
                required
                class="
                    mt-1 block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                    focus:border-slate-500 focus:bg-white
                "
            />
        </label>

        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="flex items-center gap-4">
            <Checkbox screenReaderText="Für Newsletter eintragen" />

            <span class="text-sm text-slate-700">
                Ich stimme zu, dass meine E-Mail-Adresse genutzt werden darf, um mir werbliche E-Mails und Newsletter zu
                schicken. Ich weiß, dass ich mich jederzeit vom Verteiler abmelden kann.
            </span>
        </label>

        <button
            type="submit"
            class="
                block w-full rounded-md bg-accent px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm
                hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600
            "
        >
            Abonnieren
        </button>
    </form>
</div>
