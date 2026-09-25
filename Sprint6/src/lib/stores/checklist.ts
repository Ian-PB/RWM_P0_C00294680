import { writable, derived } from 'svelte/store';

type Item = {
        id: number;
        done: boolean;
    }

export const itemsStore = writable<Item[]>([
    { id: 1, done: false },
    { id: 2, done: false },
    { id: 3, done: false },
    { id: 4, done: false },
    { id: 5, done: false }
]);

export const completedStore = derived(
    itemsStore,
    items => items.filter(item => item.done).length // Function that returns amount of items where item.done is true
);

export const percentStore = derived(
    itemsStore,
    items => items.length ? Math.round((items.filter(item => item.done).length / items.length) * 100): 0 // Function that returns the percentage of done items
);