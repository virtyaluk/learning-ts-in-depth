import { Book, DamageLoger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    departament: string;

    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

class ReferenceItem {
    private _publisher: string;
    static departament: string = 'Research';

    constructor(public title: string, private year: number) { 
        console.log('Creating a new ReferenceItem...')
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Departament: ${ReferenceItem.departament}`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
}

export { UniversityLibrarian, ReferenceItem };