let users = JSON.parse(localStorage.getItem("users"));
let currentUser = users.find((user) => user.isLogined === true);
let basket = currentUser.basket || [];

function createBasketItem() {
    let basketContainer = document.querySelector(".basket");
    basketContainer.innerHTML = ' ';
    basket = currentUser.basket || [];
    if (basket.length > 0) {
        basket.forEach((product) => {
            let basketItem = document.createElement("div");
            basketItem.classList.add("basket-item");

            let image = document.createElement("div");
            image.classList.add("image");

            let img = document.createElement("img");
            img.src = product.image;

            let title = document.createElement("h5");
            title.classList.add("title");
            title.textContent = product.title.slice(0, 10) + "...";

            let category = document.createElement("p");
            category.classList.add("category");
            category.textContent = product.category;

            let price = document.createElement("p");
            price.classList.add("price");
            price.textContent = `$${(product.price * product.count).toFixed(2)}`;

            let countArea = document.createElement("div");
            countArea.classList.add("count-area");

            let minusBtn = document.createElement("button");
            minusBtn.classList.add("minus-btn");
            minusBtn.textContent = "-";
            minusBtn.setAttribute("disabled", "true");
            if (product.count > 1) {
                minusBtn.removeAttribute("disabled");
            }

            minusBtn.addEventListener("click", () => decrementCount(product.id, count));

            let count = document.createElement("p");
            count.classList.add("count");
            count.textContent = product.count;

            let plusBtn = document.createElement("button");
            plusBtn.classList.add("plus-btn");
            plusBtn.textContent = "+";
            plusBtn.addEventListener("click", () => incrementCount(product.id, count));

            let removeBtn = document.createElement("button");
            removeBtn.classList.add("btn", "btn-danger", "remove-btn");
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener("click", () => {
                removeItem(product.id);
            });
          
            // basketItem.classList.add("basket-item");
            basketItem.dataset.productId = product.id;
            countArea.append(minusBtn, count, plusBtn);
            image.appendChild(img);
            basketItem.append(image, title, category, price, countArea, removeBtn);
            basketContainer.append(basketItem);

            updateMinusButton(minusBtn, product.count);
        });
    } else {
        let message = document.createElement("h1");
        message.textContent = "Your basket is empty!!!!!!";
        basketContainer.appendChild(message);
        toastred("Your basket is empty! Add some products.");
    }
    totalPrice();
}

function clearBasket() {
    currentUser.basket = [];
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem("users", JSON.stringify(users));
    }
    basket = [];
    document.querySelector(".total-price").textContent = "$0.00";
    createBasketItem();
}

function updateMinusButton(minusBtn, count) {
    if (count <= 1) {
        minusBtn.setAttribute("disabled", "true");
    } else {
        minusBtn.removeAttribute("disabled");
    }
}

function incrementCount(productId, countElement) {
    let exsistProduct = basket.find((product) => product.id === productId);
    if (exsistProduct) {
        exsistProduct.count++;
    }

    let basketItem = countElement.closest(".basket-item");
    let minusBtn = basketItem.querySelector(".minus-btn");
    let priceElement = basketItem.querySelector(".price");

    if (exsistProduct.count > 1) {
        minusBtn.removeAttribute("disabled");
    }

    let updatedPrice = exsistProduct.price * exsistProduct.count;
    priceElement.textContent = `$${updatedPrice.toFixed(2)}`;
    countElement.textContent = exsistProduct.count;

    updateBasketInLocalStorage();
}

function decrementCount(productId, countElement) {
    let exsistProduct = basket.find((product) => product.id === productId);

    if (exsistProduct && exsistProduct.count > 1) {
        exsistProduct.count--;
    }
    let basketItem = countElement.closest(".basket-item");
    let minusBtn = basketItem.querySelector(".minus-btn");
    let priceElement = basketItem.querySelector(".price");

    if (exsistProduct.count <= 1) {
        minusBtn.setAttribute("disabled", "true");
    }

    let updatedPrice = exsistProduct.price * exsistProduct.count;
    priceElement.textContent = `$${updatedPrice.toFixed(2)}`;
    countElement.textContent = exsistProduct.count;

    updateBasketInLocalStorage();
}

function updateBasketInLocalStorage() {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    users[userIndex].basket = basket;
    localStorage.setItem("users", JSON.stringify(users));
    totalPrice();
}

function totalPrice() {
    let total = basket.reduce((sum, product) => sum + product.price * product.count, 0);
    document.querySelector(".total-price").textContent = `$${total.toFixed(2)}`;
}

function removeItem(productId) {
    let productIndex = basket.findIndex((product) => productId === product.id);
    if (productIndex !== -1) {
        basket.splice(productIndex, 1);
    }
    let userIndex = users.findIndex((user) => user.id == currentUser.id)
    if (userIndex !== -1) {
        users[userIndex].basket = basket;
        localStorage.setItem("users", JSON.stringify(users));

    } totalPrice();
    let basketItems = document.querySelectorAll(".basket-item");
    basketItems.forEach(item => {
        if (item.dataset.productId == productId) {
            item.remove();
        }
    });
}
function toastred(text) {
    Toastify({
        text: text,
        duration: 500,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            color: "white",
            paddingLeft: "100px",
            background: "linear-gradient(90deg, rgba(36,18,0,1) 0%, rgba(121,18,9,1) 35%, rgba(255,101,0,1) 100%)",
        },
        onClick: function () { }
    }).showToast();
}

createBasketItem();

let clearBasketBtn = document.createElement("button");
clearBasketBtn.classList.add("btn", "btn-danger", "clear-basket-btn", "p-2");
clearBasketBtn.style.display = "block";
clearBasketBtn.style.width = "400px";
clearBasketBtn.style.margin = "20px auto";
clearBasketBtn.textContent = "Clear Basket";
clearBasketBtn.addEventListener("click", clearBasket);
document.body.appendChild(clearBasketBtn);
