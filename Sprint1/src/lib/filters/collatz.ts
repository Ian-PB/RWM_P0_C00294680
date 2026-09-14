export function collatz(x: number): number 
{
    if (x == 0)
    {
        return 0;
    }
    else if (x % 2 == 0) // Divide by 2 if even
    {
        return (x / 2);
    }
    else // Triple and add 1 if odd
    {
        return (x * 3) + 1;
    }
}

// Map over a sequence
export function collatzMulti(xs: number[]): number[] 
{
  return xs.map(collatz);
}
