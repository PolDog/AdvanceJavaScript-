class Library {
	#books;
	constructor(books) {
		this.#books = books;
		console.log(" в библиотеке ", this.#books);
		const duplicates = books.filter((element, index, arr) => arr.indexOf(element) !== index);
		if (duplicates.length > 0) {
			throw new Error("Есть дубликаты ");
		}
	}
	get allBooks() {
		return this.#books;
	}

	addBook(title) {
		if (this.hasBook(title)) {
			throw new Error("книга уже существует");
		} else {
			this.#books.push(title);
			console.log("книга добавлена ", title);
		}
	}
	removeBook(title) {
		const index = this.#books.indexOf(title);
		if (index < 0) {
			throw new Error("Такой книги нет");
		} else {
			this.#books.splice(index, 1);
			console.log("книга удалена ", title);
		}
	}
	hasBook(title) {
		if (this.#books.includes(title)) {
			return true;
		} else {
			return false;
		}
	}
}
const books = ["book 1", "book 2", "book 3", "book 4"];
const lib = new Library(books);
lib.addBook("book 5");
console.log("в библиотеке ", lib.allBooks);
// lib.addBook('book 5');
lib.removeBook("book 5");
console.log("в библиотеке ", lib.allBooks);
