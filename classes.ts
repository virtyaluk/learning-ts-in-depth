import { Book, DamageLoger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    departament: string;

    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

export { UniversityLibrarian };