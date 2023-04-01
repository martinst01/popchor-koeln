<script lang="ts">
    import type { FormStatus } from '$lib/types';
    import Checkbox from './Checkbox.svelte';
    import SubmitButton from './SubmitButton.svelte';

    export let classes: string;

    let name: string;
    let email: string;
    let subject: string;
    let message: string;
    let newsletter = false;

    let status: FormStatus = 'ready';

    const onSubmit = async (e: Event) => {
        status = 'loading';

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            status = 'success';
        } catch (e) {
            status = 'error';
        }
    };
</script>

<div class="space-y-2 {classes}">
    <h3 class="text-lg font-bold">Kontaktformular</h3>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ratione, laborum pariatur itaque earum, alias
        reprehenderit dolorem perferendis animi blanditiis cupiditate incidunt quo aliquam sunt voluptatibus iste,
        possimus architecto doloribus!
    </p>

    <form class="space-y-3" on:submit|preventDefault={onSubmit}>
        <label class="block">
            <span class="text-xs font-bold uppercase tracking-wide text-slate-500">Dein Name:</span>
            <input
                type="text"
                name="name"
                bind:value={name}
                required
                class="
                    mt-1 block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                    focus:border-slate-500 focus:bg-white
                "
            />
        </label>

        <label class="block">
            <span class="text-xs font-bold uppercase tracking-wide text-slate-500">Deine Email:</span>
            <input
                type="email"
                name="email"
                bind:value={email}
                required
                class="
                    mt-1 block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                    focus:border-slate-500 focus:bg-white
                "
            />
        </label>

        <label class="block">
            <span class="text-xs font-bold uppercase tracking-wide text-slate-500">Betreff:</span>
            <select
                name="subject"
                class="
                    mt-1 block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                    focus:border-slate-500 focus:bg-white
                "
                bind:value={subject}
            >
                <option value="Lob und Kritik">Lob und Kritik</option>
                <option value="Mitsingen">Mitsingen</option>
                <option value="Anfrage">Anfrage</option>
                <option value="Sonstiges">Sonstiges</option>
            </select>
        </label>

        <label class="block">
            <span class="text-xs font-bold uppercase tracking-wide text-slate-500">Deine Nachricht:</span>
            <textarea
                name="message"
                bind:value={message}
                class="
                    mt-1 block w-full rounded-md border border-transparent bg-slate-100 px-3 py-2 outline-none
                    focus:border-slate-500 focus:bg-white
                "
            />
        </label>

        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="flex items-center gap-4">
            <Checkbox bind:enabled={newsletter} screenReaderText="Für Newsletter eintragen" />

            <span class="text-sm text-slate-700">
                Ja, bitte trage mich auch in euren Newsletter ein. Ich weiß, dass ich mich jederzeit vom Verteiler
                abmelden kann.
            </span>
        </label>

        <SubmitButton {status} text="Senden" />
    </form>
</div>
