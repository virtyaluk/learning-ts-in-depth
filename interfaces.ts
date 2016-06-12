import { Category } from './enums';

interface DamageLoger {
    (reason: string): void;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLoger;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    departament: string;
    assistCustomer: (cusName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

export { Book, DamageLoger as Logger, Person, Author, Librarian, Magazine };