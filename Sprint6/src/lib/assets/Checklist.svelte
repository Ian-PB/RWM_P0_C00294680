<script>
    export let id = "";
    export let label = "Temp";
    export let change = false
</script>

<label>
    <input 
    id={id}
    type="checkbox" 
    bind:checked={change}>

    {label} - {id}<br>
</label>