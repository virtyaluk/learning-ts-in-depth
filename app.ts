function GetAllBooks() {
    let books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
		{ title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
		{ title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
		{ title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function LogFirstAvailable(books): void {
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

enum Category { Biography, Poetry, Fiction, History, Children }

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
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

const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
LogBookTitles(poetryBooks);