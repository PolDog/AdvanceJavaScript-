const initialData = [
	{
		product: "Apple iPhone 13",
		reviews: [
			{
				id: "1",
				text: "Отличный телефон! Батарея держится долго.",
			},
			{
				id: "2",
				text: "Камера супер, фото выглядят просто потрясающе.",
			},
		],
	},
	{
		product: "Samsung Galaxy Z Fold 3",
		reviews: [
			{
				id: "3",
				text: "Интересный дизайн, но дорогой.",
			},
		],
	},
	{
		product: "Sony PlayStation 5",
		reviews: [
			{
				id: "4",
				text: "Люблю играть на PS5, графика на высоте.",
			},
		],
	},
];

const itemsList = document.querySelector(".itemsList");

const createList = () => {
	initialData.forEach((element) => {
		const divItem = document.createElement("div");
		divItem.classList.add("item");
		const itemName = document.createElement("h2");
		const reviewsUl = document.createElement("ul");
		reviewsUl.classList.add("review");

		itemName.classList.add("itemName");
		itemName.textContent = element.product;
		element.reviews.forEach((review) => {
			const reviewEl = document.createElement("li");
			reviewEl.classList.add("review");
			reviewEl.textContent = review.text;
			reviewsUl.append(reviewEl);
		});

		const inputEl = document.createElement("input");
		inputEl.type = "text";
		inputEl.placeholder = "введите отзыв";
		inputEl.classList.add("userInput");
		const btn = document.createElement("button");
		btn.classList.add("sendBtn");
		btn.textContent = "send";

		divItem.append(itemName);
		divItem.append(inputEl);
		divItem.append(btn);
		divItem.append(reviewsUl);
		itemsList.append(divItem);
	});
};

createList();
itemsList.addEventListener("click", function (e) {
	if (e.target.className === "sendBtn") {
		const itemEl = e.target.closest(".item");
		const input = itemEl.querySelector(".userInput");
		const reviews = itemEl.querySelector(".review");
		const reviewEl = document.createElement("li");
		if (input.value.length < 50) {
			throw new Error("короткий отзыв");
		} else if (input.value.length > 500) {
			throw new Error("длинный отзыв");
		} else {
			reviewEl.classList.add("review");
			reviewEl.textContent = input.value;
			input.value = "";
			reviews.append(reviewEl);
			console.log("send");
		}
	}
});
