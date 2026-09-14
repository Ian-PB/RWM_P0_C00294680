import { describe, it, expect } from "vitest";
import { combinedFilter } from "./combined";

describe('combined (mine -> peer)', () => {
    it('basic sequence', () => {
        const input = [1, 5, 4, 98];
        const expected = [4, 12, 14, 47];

        expect(combinedFilter(input)).toEqual(expected);
    });

    it('edge cases', () => {
        const input = [0, 9999999];
        const expected = [0, 29999998];

        expect(combinedFilter(input)).toEqual(expected);
    });
});