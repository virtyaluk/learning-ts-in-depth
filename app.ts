import { Category } from './enums';
import { Book, Logger, Person, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';
import Encyclopedia from './encyclopedia';
import Shelf from './shelf';

function GetAllBooks(): Book[] {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
		{ id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
		{ id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
		{ id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function LogFirstAvailable(books: Book[] = GetAllBooks()): void {
    let numberOfBooks: number = books.length,
        firstAvalBook: string = '';

    for (let curBook of books) {
        if (curBook.available) {
            firstAvalBook = curBook.title;

            break;
        }
    }

    console.log('Total books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvalBook);
}



function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks(),
        filteredTitles: string[] = [];

    for (let curBook of allBooks) {
        if (curBook.category === categoryFilter) {
            filteredTitles.push(curBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function GetBookById(id: number): Book {
    const allBooks = GetAllBooks();
    
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string) : void {
    console.log('Creating customer: ' + name);

    if (age) {
        console.log('Age: ' + age);
    }

    if (city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIds: number[]): string[] {
    console.log('Checking out books for ' + customer);

    let booksCkeckedOut: string[] = [];

    for (let id of bookIds) {
        let book = GetBookById(id);

        if (book.available) {
            booksCkeckedOut.push(book.title);
        }
    }

    return booksCkeckedOut;
}

function GetTitles(author: string): string[];

function GetTitles(available: boolean): string[];

function GetTitles(bookProperty: any) : string[] {
    const allBooks = GetAllBooks(),
        foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    if (typeof bookProperty == 'boolean') {
        for (let book of allBooks) {
            if (book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

//******************************************************************

let inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnel', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

let bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();

let magazines: Array<Magazine> = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quartely', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

magazines.forEach(mag => magazineShelf.add(mag));

let firstMagazine: Magazine = magazineShelf.getFirst();

magazineShelf.printTitles();

let softwareBooks = bookShelf.find('Code Complete');
console.log(`${softwareBooks.title} (${softwareBooks.author})`);

// let purgedBooks: Array<Book> = Purge(inventory);
// purgedBooks.forEach(book => console.log(book.title));

// let purgedNumbers: Array<number> = Purge<number>([1, 2, 3, 4]);
// purgedNumbers.forEach(num => console.log(num));

// let Newspaper = class extends ReferenceItem {
//     printCitation(): void {
//         console.log(`Newspaper: ${this.title}`)
//     }
// }

// let myPaper = new Newspaper('The Gazette', 2016);

// myPaper.printCitation();

// class Novel extends class { title: string } {
//     mainCharacter: string;
// }

// let favoriteNovel = new Novel();

// let refBook:ReferenceItem = new Encyclopedia('WorldPedia', 2012, 10);

// refBook.printItem();
// refBook.printCitation();

// let ref = new ReferenceItem('Facts and Figures', 2004);
// ref.publisher = 'Random Data Publisher';

// ref.printItem();
// console.log(ref.publisher);

// let ref = new ReferenceItem();

// ref.title = 'Facts and Figures';
// ref.year = 2006;

// ref.printItem();

// let favoriteLibrarian: Librarian = new UniversityLibrarian();

// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');

// let myBook: Book = {
//     id: 5,
//     title: 'Foo bar',
//     author: 'Bohdan Shtepan',
//     available: true,
//     category: Category.Biography,
//     pages: 250,
//     markDamaged: (reason: string) => console.log('Damaged: ' + reason),
// };

// let logDamage: DamageLoger = (damage: string) => console.log('Damage reported: ' + damage);
// console.log('Coffee stains');

// PrintBook(myBook);
// myBook.markDamaged('Missing back cover');

// let hermanBooks = GetTitles('Herman Melville');
// hermanBooks.forEach(title => console.log(title));

// let myBooks: string[] = CheckoutBooks('Thor', 1, 3, 4);
// myBooks.forEach(title => console.log(title));

// LogFirstAvailable()

// let fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));

// CreateCustomer('Roby');
// CreateCustomer('Glen', 28);
// CreateCustomer('Toby', 56, 'Boston');

//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, ind) => console.log(`${++ind} - ${val}`));

//let x: number;
//let IdGenerator: (chars: string, nums: number) => string = CreateCustomerID;
//console.log(IdGenerator('Foo', 1));