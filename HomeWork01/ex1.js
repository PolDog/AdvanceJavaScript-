console.log('ex1');

const musicCollection = [
	{ title: "song 1", author: "Music Group 1",year: "1990" },
	{ title: "song 1", author: "Music Group 2",year: "2000" },
	{ title: "song 1", author: "Music Group 3",year: "2010" },
];

musicCollection[Symbol.iterator] = function () {
	return {
		current: 0,
		to: this.length,
		next() {
			return this.current < this.to ? { done: false, value: musicCollection[this.current++] } : { done: true };
		},
	};
};

for (let song of musicCollection) {
	console.log(song.author,' ',song.title, ' ',song.year);
};

console.log('ex2');
const restoran=new Map();

const cook=new Map();

cook.set('Суши "Филадельфия"','Ольга')
cook.set('Суши "Калифорния"','Ольга')
cook.set('Пицца "Маргарита"','Виктор')
cook.set('Пицца "Пепперони"','Виктор')
cook.set('Тирамису','Дмитрий')
cook.set('Чизкейк','Дмитрий')


const alex=new Map();
alex.set(1,'Пицца "Пепперони"')
alex.set(2,'Тирамису')

const marija=new Map();
marija.set(1,'Суши "Калифорния"')
marija.set(2,'Пицца "Маргарита"')

const irina=new Map();
irina.set(1,'Чизкейк')

restoran.set('Алексей',alex);
restoran.set('Мария',marija);
restoran.set('Ирина',irina);

console.log(restoran);
console.log(cook);

console.log("Блюдо 1 для Алексей готовит ",cook.get(restoran.get('Алексей').get(1)));
