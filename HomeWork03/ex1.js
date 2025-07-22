let initialData = [];
let initialData0 = [
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

const body = document.querySelector(".body");
const itemsList = document.querySelector(".itemsList");
const addBtn = document.createElement("button");
const onlyReviewsEl = document.querySelector(".onlyReviews");
const resetListBtn = document.querySelector(".resetList");

addBtn.classList.add("addBtn");
addBtn.textContent = "добавить продукт";
body.append(addBtn);

const modal = document.getElementById("modal");
const productNameEl = modal.querySelector(".productName");
const productReviewEl = modal.querySelector(".productReview");
const addReview = modal.querySelector(".addReview");

const createList = () => {
	if (!localStorage.getItem("data")) {
		localStorage.setItem("data", JSON.stringify(initialData0));
	}
	initialData = JSON.parse(localStorage.getItem("data"));
	itemsList.innerHTML = "";
	initialData.forEach((element) => {
		const divItem = document.createElement("div");
		divItem.classList.add("item");
		const itemName = document.createElement("h2");
		const reviewsUl = document.createElement("ul");
		reviewsUl.classList.add("reviewUl");

		itemName.classList.add("itemName");
		itemName.textContent = element.product;

		element.reviews.forEach((review) => {
			const reviewDiv = document.createElement("div");
			reviewDiv.classList.add("reviewDiv");
			const reviewEl = document.createElement("li");
			reviewEl.classList.add("review");
			reviewEl.textContent = review.text;

			const removeBtn = document.createElement("button");
			removeBtn.classList.add("removeBtn");
			removeBtn.textContent = "Удалить";
			reviewDiv.append(reviewEl);
			reviewDiv.append(removeBtn);
			reviewsUl.append(reviewDiv);
		});

		reviewsUl.classList.add("hidden");
		divItem.append(itemName);
		divItem.append(reviewsUl);
		if (onlyReviews.checked) {
			if (element.reviews.length > 0) {
				console.log(element.reviews.length);
				itemsList.append(divItem);
			}
		} else {
			itemsList.append(divItem);
		}
	});
};

onlyReviews.addEventListener("click", function (e) {
	createList();
});

resetListBtn.addEventListener("click", function (e) {
	initialData = initialData0;
	saveData();
});

addBtn.addEventListener("click", function (e) {
	modal.style.display = "flex";
});

addReview.addEventListener("click", function (e) {
	modal.style.display = "none";
	const productName = productNameEl.value;
	const productReview = productReviewEl.value;
	const review = {
		id: "5",
		text: productReview,
	};
	let product = {
		product: productName,
		reviews: [review],
	};
	initialData.push(product);
	saveData();
});

document.addEventListener("mousedown", function (e) {
	if (!modal.contains(e.target) && e.target !== addBtn) {
		modal.style.display = "none";
	}
});

itemsList.addEventListener("click", function (e) {
	const productReviewItems = document.querySelectorAll(".itemName");
	productReviewItems.forEach((element) => {
		const itemEl = element.closest(".item");
		const reviewsUl = itemEl.querySelector(".reviewUl");
		const removeBtn = itemEl.querySelector(".removeBtn");

		if (element === e.target) {
			reviewsUl.classList.remove("hidden");
		} else {
			reviewsUl.classList.add("hidden");
		}
		if (removeBtn) {
			removeBtn.addEventListener("click", function (e) {
				const reviewEl = reviewsUl.querySelector(".review");
				initialData.forEach((element) => {
					let newEl = [];
					element.reviews.forEach((review) => {
						if (review.text != reviewEl.textContent) {
							newEl.push(review);
						} else {
							console.log("not add ", review);
						}
					});
					element.reviews = newEl;
				});
				console.log(initialData);
				saveData();
			});
		}
	});
});

createList();
function saveData() {
	localStorage.setItem("data", JSON.stringify(initialData));
	createList();
}
