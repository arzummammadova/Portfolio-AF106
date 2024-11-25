document.addEventListener("DOMContentLoaded", async () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let isLogineduser = users.some((user) => user.isLogined === true);
    let isCurrentuser = users.find((user) => user.isLogined === true);

    let loginButton = document.querySelector(".login");
    let registerButton = document.querySelector(".register");
    let logoutButton = document.querySelector(".logout");
    let userBtn = document.querySelector(".userbtn");
    let usernameDisplay = document.querySelector(".username");
    let wishlistPage = document.querySelector(".wishlist-page");
    let basketPage = document.querySelector(".basketPage");

   
    async function getProducts() {
        try {
            let response = await fetch("http://localhost:3000/products");
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching products:", error);
            // toast("Error loading products");
            return [];
        }
    }

  
    function changeUsername() {
        if (isLogineduser) {
            loginButton.classList.add("d-none");
            registerButton.classList.add("d-none");
            logoutButton.classList.remove("d-none");

            if (usernameDisplay) {
                usernameDisplay.textContent = isCurrentuser.username;
            }
            userBtn.classList.remove("d-none");
        } else {
            loginButton.classList.remove("d-none");
            registerButton.classList.remove("d-none");
            logoutButton.classList.add("d-none");
            userBtn.classList.add("d-none");
        }
    }

    function logoutt() {
        toast("Goodbye");
        let loggedInUser = users.find((user) => user.isLogined === true);
        if (loggedInUser) {
            loggedInUser.isLogined = false;
            localStorage.setItem("users", JSON.stringify(users));
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }

 
    if (wishlistPage) {
        wishlistPage.addEventListener("click", (e) => {
            if (!isLogineduser) {
                e.preventDefault();
                toast("Going to Login");
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1000);
            }
        });
    }

    if (basketPage) {
        basketPage.addEventListener("click", (e) => {
            if (!isLogineduser) {
                e.preventDefault();
                toast("Going to Login");
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 1000);
            }
        });
    }

    function createUserCard(products) {
        let cardsContainer = document.querySelector(".cards");
        cardsContainer.innerHTML = "";

        products.forEach((product) => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.addEventListener("click", () => {
                window.location.href = `details.html?id=${product.id}`;
            });

            let image = document.createElement("div");
            image.classList.add("card-image");
            let img = document.createElement("img");
            img.src = product.image;

            let cardContent = document.createElement("div");
            cardContent.classList.add("card-content");
            let cardTitle = document.createElement("h2");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = product.title.slice(0, 20) + "...";

            let category = document.createElement("p");
            category.classList.add("card-category");
            category.textContent = product.category;

            let cardFooter = document.createElement("div");
            cardFooter.classList.add("card-footer");

            let price = document.createElement("span");
            price.classList.add("card-price");
            price.textContent = `$${product.price}`;

            let rating = document.createElement("div");
            rating.classList.add("card-rating");
            let ratingStar = document.createElement("span");
            ratingStar.textContent = product.rating.rate;
            let count = document.createElement("span");
            count.textContent = `${product.rating.count}`;

            let heart = document.createElement("i");
            heart.classList.add("fa-regular", "fa-heart", "heart");

            if (isLogineduser && isCurrentuser.wishList.some((item) => item.id === product.id)) {
                heart.classList.remove("fa-regular");
                heart.classList.add("fa-solid");
            }

            heart.addEventListener("click", (e) => {
                e.stopPropagation();
                toggleAddWishList(product.id, products, heart);
            });

            let addBtn = document.createElement("button");
            addBtn.classList.add("btn", "add-to-cart", "btn-primary");
            addBtn.textContent = "Add to basket";

            addBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                addBasket(product.id, products);
            });

            rating.append(ratingStar, count);
            cardFooter.append(price, rating);
            cardContent.append(cardTitle, category);
            image.append(img);
            card.append(image, cardContent, cardFooter, heart, addBtn);
            cardsContainer.append(card);
        });
    }

   
    function addBasket(productId, products) {
        if (!isCurrentuser) {
            toast("Please login to add to basket");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);
            return;
        }

        let userIndex = users.findIndex((user) => user.id === isCurrentuser.id);
        if (userIndex === -1) {
            toast("User not found");
            return;
        }

        if (!isCurrentuser.basket) {
            isCurrentuser.basket = [];
        }

        let product = products.find((product) => product.id === productId);
        if (!product) {
            toast("Product not found");
            return;
        }

        let existProduct = isCurrentuser.basket.find((item) => item.id === productId);
        if (existProduct) {
            existProduct.count++;
        } else {
            isCurrentuser.basket.push({ ...product, count: 1 });
        }

        users[userIndex] = isCurrentuser;
        localStorage.setItem("users", JSON.stringify(users));
        toast("Basket updated successfully");
        updateBasketCount(isCurrentuser.basket);
    }

   
    function updateBasketCount(basket = []) {
        let basketElement = document.querySelector(".basketIcon sup");
        let basketCount = basket.reduce((acc, product) => acc + product.count, 0);
        if (basketElement) {
            basketElement.textContent = basketCount;
        }
    }

    function toggleAddWishList(productId, products, heartElement) {
        if (!isCurrentuser) {
            toast("Please login to add to wishlist");
            return;
        }

        let userIndex = users.findIndex((user) => user.id === isCurrentuser.id);

        if (isCurrentuser.wishList.some((item) => item.id === productId)) {
            let productIndex = isCurrentuser.wishList.findIndex((product) => product.id === productId);
            isCurrentuser.wishList.splice(productIndex, 1);
            users[userIndex] = isCurrentuser;
            localStorage.setItem("users", JSON.stringify(users));
            toast("Product removed from wishlist");

            heartElement.classList.toggle("fa-regular");
            heartElement.classList.toggle("fa-solid");
        } else {
            let product = products.find((product) => product.id === productId);
            isCurrentuser.wishList.push(product);
            users[userIndex] = isCurrentuser;
            localStorage.setItem("users", JSON.stringify(users));
            toast("Product added to wishlist");

            heartElement.classList.toggle("fa-regular");
            heartElement.classList.toggle("fa-solid");
        }
    }

  
    function toast(message, color = "linear-gradient(to right, #00b09b, #96c93d)") {
        Toastify({
            text: message,
            duration: 2000,
            gravity: "top",
            position: "right",
            style: { background: color }
        }).showToast();
    }


    try {
        const products = await getProducts();
        createUserCard(products);
        updateBasketCount(isCurrentuser?.basket || []);
    } catch (error) {
        console.error("Error initializing products:", error);
    }

    changeUsername();
    logoutButton.addEventListener("click", logoutt);
});
