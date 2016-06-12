export function CalculateLateFee(daysLeft: number): number {
    return daysLeft * 0.25;
}

export function MaxBooksAllowed(age: number): number {
    return age < 12 ? 3 : 10;
}

function privateFunc(): void {
    console.log('This is private...');
}

export function Purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}