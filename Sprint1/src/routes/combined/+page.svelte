<script lang="ts">
    import { combinedFilter } from '$lib/filters/combined/combined';
    let raw = $state('2 5 21 52 999 0');
    let input = $derived(
        raw.trim().split(/\s+/).filter(Boolean).map(Number)
    );
    let output = $derived(combinedFilter(input));
</script>

<h1>Sequence Filter Combined Demo</h1>
<label>
    Input (space-separated integers)
    <input bind:value={raw} placeholder="e.g., 4 3 2 1 0" />
</label>

<h2>Combined Output</h2>
<p>{output.join(' ')}</p>

<style>
    label { display: block; margin: 1rem 0; }
    input { width: 100%; max-width: 30rem; }
</style>