<script>
    export let id = 0;
    let label = "Temp";
    let change = false

    label = "Temp"
</script>

<label>
    <input type="checkbox" bind:checked={change}>{label}{id}
</label>

{#if change}
	<p>Active</p>
{:else}
	<p>Not active</p>
{/if}