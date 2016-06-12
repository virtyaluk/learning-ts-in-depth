import * as Interfaces from './interfaces';

class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    departament: string;

    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

abstract class ReferenceItem {
    private _publisher: string;
    static departament: string = 'Research';

    constructor(public title: string, protected year: number) { 
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

    abstract printCitation(): void;
}

export { UniversityLibrarian, ReferenceItem };