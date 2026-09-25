<h1 data-testid="title">Progress Checklist Page</h1>

<script lang="ts">
    import Checklist from "$lib/assets/Checklist.svelte";
    import {completedStore, percentStore} from '$lib/stores/checklist';

    const maxAmount = 5
    let currentCount = 0;
    let percentage = 0;

    function submitChecklist() {
        currentCount = $completedStore;
        percentage = $percentStore;
    }

    function updateAmount()
    {
        let checkbox;
        currentCount = 0;
        for (let i = 1; i < maxAmount+1; i++)
        {
            checkbox = <HTMLInputElement> document.getElementById(i.toString());
            if (checkbox.checked)
            {
                currentCount = currentCount + 1;
            }
        }

        percentage = (currentCount / maxAmount) * 100;
    }
</script>

<h2>{currentCount} / {maxAmount} ({percentage}%)</h2>

<main>
    <Checklist label="Box " id={1}></Checklist>
    <Checklist label="Box " id={2}></Checklist>
    <Checklist label="Box " id={3}></Checklist>
    <Checklist label="Box " id={4}></Checklist>
    <Checklist label="Box " id={5}></Checklist>

    <input type="submit" value="Submit" onclick={submitChecklist}>
</main>