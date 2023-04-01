<script type="ts">
	import imageHeader from '$lib/assets/header.png';
	import Gig from './Gig.svelte';
	import Section from './Section.svelte';

	const gigs = [
		{
			title: 'Doppelkonzert Mönchengladbach /m Piece of Peace',
			time: '21. April 2023 um 20:15',
			place: ['Projekt 42', 'Waldhausener Str. 40-42', '41061 Mönchengladbach'],
			price: '10/15/20 €',
			description: `
				Unser kleines Konzertwochenende im April startet in Mönchengladbach mit dem wunderbaren Vokalensemble
				Piece of Peace!
			`,
			link: 'https://www.piece-of-peace.de',
			linkText: 'piece-of-peace.de',
			entryTime: 'ab 19:30 Uhr',
		},
		{
			title: 'Doppelkonzert Dortmund /m Vocal Crew',
			time: '22. April 2023 um 19:00',
			place: ['Georgschule e.V.', 'Mergelteichstr. 63', '44225 Dortmund'],
			price: '12/14 €',
			description: `
				Der zweite Stopp unserer kleinen Tour ist in Dortmund bei der grandiosen Vocal Crew, die letztes Jahr beim
				Sing & Swing Festival auch zum Meisterchor gekürt wurde!
			`,
			link: 'https://www.vocalcrew.com',
			linkText: 'vocalcrew.com',
			entryTime: 'ab 18:00 Uhr',
		},
		{
			title: 'Doppelkonzert Mönchengladbach /m Piece of Peace',
			time: '21. April 2023 um 20:15',
			place: ['Projekt 42', 'Waldhausener Str. 40-42', '41061 Mönchengladbach'],
			price: '10/15/20 €',
			description: `
				Unser kleines Konzertwochenende im April startet in Mönchengladbach mit dem wunderbaren Vokalensemble
				Piece of Peace!
			`,
			link: 'https://www.piece-of-peace.de',
			linkText: 'piece-of-peace.de',
			entryTime: 'ab 19:30 Uhr',
		},
		{
			title: 'Doppelkonzert Dortmund /m Vocal Crew',
			time: '22. April 2023 um 19:00',
			place: ['Georgschule e.V.', 'Mergelteichstr. 63', '44225 Dortmund'],
			price: '12/14 €',
			description: `
				Der zweite Stopp unserer kleinen Tour ist in Dortmund bei der grandiosen Vocal Crew, die letztes Jahr beim
				Sing & Swing Festival auch zum Meisterchor gekürt wurde!
			`,
			link: 'https://www.vocalcrew.com',
			linkText: 'vocalcrew.com',
			entryTime: 'ab 18:00 Uhr',
		},
	];
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

<Section title="Chor">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor nihil unde, natus reiciendis possimus velit
		magni voluptatum reprehenderit iure, similique odio ullam maxime corrupti qui itaque ad, repellendus perspiciatis
		exercitationem. Labore facilis voluptas numquam aliquid quibusdam possimus odit eos explicabo vitae, odio dolor
		doloremque fuga eveniet consequatur! Dolore soluta cupiditate asperiores recusandae minima id quisquam corrupti
		ratione deleniti dolorem libero magnam laudantium voluptate animi sit aliquid similique provident, maxime eius,
		molestias error omnis excepturi quasi? Facilis accusantium ipsa soluta, perspiciatis saepe, eos repellendus aperiam
		blanditiis inventore eveniet modi dolorem? Laboriosam nulla voluptate at odit, quos ipsum atque aut repudiandae sunt
		impedit fuga corporis repellat suscipit blanditiis quod sint ipsam, accusamus quis laudantium rem modi, velit autem
		totam? Sit eum neque maiores sequi expedita laborum libero officiis saepe totam dolore ratione voluptatibus, et vel
		pariatur. Obcaecati commodi ipsa nam laudantium. Placeat ullam illum suscipit, dolore sit repudiandae id non
		eveniet!
	</p>
</Section>

<Section title="Chorleiter">
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor nihil unde, natus reiciendis possimus velit
		magni voluptatum reprehenderit iure, similique odio ullam maxime corrupti qui itaque ad, repellendus perspiciatis
		exercitationem. Labore facilis voluptas numquam aliquid quibusdam possimus odit eos explicabo vitae, odio dolor
		doloremque fuga eveniet consequatur! Dolore soluta cupiditate asperiores recusandae minima id quisquam corrupti
		ratione deleniti dolorem libero magnam laudantium voluptate animi sit aliquid similique provident, maxime eius,
		molestias error omnis excepturi quasi? Facilis accusantium ipsa soluta, perspiciatis saepe, eos repellendus aperiam
		blanditiis inventore eveniet modi dolorem? Laboriosam nulla voluptate at odit, quos ipsum atque aut repudiandae sunt
		impedit fuga corporis repellat suscipit blanditiis quod sint ipsam, accusamus quis laudantium rem modi, velit autem
		totam? Sit eum neque maiores sequi expedita laborum libero officiis saepe totam dolore ratione voluptatibus, et vel
		pariatur. Obcaecati commodi ipsa nam laudantium. Placeat ullam illum suscipit, dolore sit repudiandae id non
		eveniet!
	</p>
</Section>

<Section title="Termine">
	<div class="space-y-4">
		{#each gigs as gig}
			<Gig {...gig}>
				<span class="after:content-['>>>']">{gig.description}</span>
				<a
					href={gig.link}
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-500 hover:text-blue-700 focus:text-blue-700">{gig.linkText}</a
				>
			</Gig>
		{/each}
	</div>
</Section>
