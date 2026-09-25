<script lang="ts">
    import { itemsStore } from '$lib/stores/checklist';

    export let id: number;
    export let label: string;

    function updateChecked(event: Event) 
    {
        const checkbox = event.currentTarget as HTMLInputElement;

        // Find the item in items which has the same id and update it's done variable
        itemsStore.update(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, done: checkbox.checked }
                    : item
            )
        );
    }
</script>

<label>
    <input
        id={id.toString()}
        type="checkbox"
        onchange={updateChecked}
    >

    {label} - {id}
</label>