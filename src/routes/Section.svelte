<script lang="ts">
	export let title: string;
</script>

<section class="container mx-auto px-4 py-4">
	<hgroup
		class="
			before:-z-1 relative my-4 flex justify-center
			before:absolute before:inset-x-0 before:top-[50%] before:h-[1px] before:bg-slate-500
		"
	>
		<h2 class="relative bg-white px-8 text-3xl font-medium first-letter:text-[#FF6666]">{title}</h2>
	</hgroup>

	<slot />
</section>
