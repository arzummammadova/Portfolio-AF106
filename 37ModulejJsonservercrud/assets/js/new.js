let users = JSON.parse(localStorage.getItem("users"));
let currentUser = users.find((user) => user.isLogined === true);
let basket = currentUser.basket || [];

function createBasketItem() {
  if (basket.length > 0) {
    basket.forEach((product) => {
      let basketItem = document.createElement("div");
      basketItem.classList.add("basket-item");

      let image = document.createElement("div");
      image.classList.add("image");

      let img = document.createElement("img");

      let title = document.createElement("h5");
      title.classList.add("title");

      let category = document.createElement("p");
      category.classList.add("category");

      let price = document.createElement("p");
      price.classList.add("price");

      let countArea = document.createElement("div");
      countArea.classList.add("count-area");

      let minusBtn = document.createElement("button");
      minusBtn.classList.add("minus-btn");
      minusBtn.setAttribute("disabled","true")
      minusBtn.textContent = "-";

      let count = document.createElement("p");
      count.classList.add("count");
      count.textContent = "0";

      let plusBtn = document.createElement("button");
      plusBtn.classList.add("plus-btn");
      plusBtn.textContent = "+";

      let removeBtn = document.createElement("button");
      removeBtn.classList.add("btn", "btn-danger", "remove-btn");

      removeBtn.textContent = "Remove";

      countArea.append(minusBtn, count, plusBtn);
      image.appendChild(img);
      basketItem.append(image, title, category, price, countArea, removeBtn);
      let basketContainer = document.querySelector(".basket");
      basketContainer.append(basketItem);

      img.src = product.image;
      title.textContent = product.title.slice(0,10) + "...";
      category.textContent = product.category;
      price.textContent = `$${product.price}`;
      count.textContent = product.count;
    });
  }
}
createBasketItem();