<script lang="ts">
	export let label: string;
</script>

<div class="flex items-baseline">
	<div class="mr-2 w-16 flex-shrink-0 text-right text-xs font-bold uppercase text-slate-500">{label}:</div>
	<slot />
</div>
