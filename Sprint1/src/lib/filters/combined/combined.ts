import { collatzMulti as myCollatz } from '$lib/filters/collatz';
import { diffs as peerDiff } from 'peer-filter-C00295678';

export function combinedFilter(xs: number[]): number[] {
    const afterMine = myCollatz(xs);
    return peerDiff(afterMine);
}