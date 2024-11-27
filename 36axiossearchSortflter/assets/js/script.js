document.addEventListener("DOMContentLoaded", async () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const getProducts = async () => {
        let response = await axios("https://fakestoreapi.com/products");
        let products = response.data;
        return products;
    }
    let products = await getProducts();

    let isLogineduser = users.some((user) => user.isLogined === true);
    let isCurrentuser = users.find((user) => user.isLogined === true);

    let loginButton = document.querySelector(".login");
    let registerButton = document.querySelector(".register");
    let logoutButton = document.querySelector(".logout");
    let userBtn = document.querySelector(".userbtn");
    let usernameDisplay = document.querySelector(".username");
    let wishlistPage = document.querySelector(".wishlist-page");
    let basketPage = document.querySelector(".basketPage");



    let searchBtn = document.querySelector(".search-button");
    let searchInput = document.querySelector(".search-input");

    let azz = document.querySelector(".az");
    let za = document.querySelector(".za");
    let hightolow = document.querySelector(".hightolow");
    let lowtohigh = document.querySelector(".lowtohigh");
    let normal = document.querySelector(".normal");

    let filtredproducts = [...products];

    let sortingOption = localStorage.getItem("sortingOption") || "normal";
    applySorting(sortingOption);

    let dropdownMenuButton = document.getElementById('dropdownMenuButton1');
    if (dropdownMenuButton) {
        dropdownMenuButton.innerHTML = localStorage.getItem("dropdownText") || "Normal";
    }

    azz.addEventListener("click", () => {
        localStorage.setItem("sortingOption", "az");
        localStorage.setItem("dropdownText", "A-Z");
        applySorting("az");
        dropdownMenuButton.innerHTML = "A-Z";
    });

    za.addEventListener("click", () => {
        localStorage.setItem("sortingOption", "za");
        localStorage.setItem("dropdownText", "Z-A");
        applySorting("za");
        dropdownMenuButton.innerHTML = "Z-A";
    });

    hightolow.addEventListener("click", () => {
        localStorage.setItem("sortingOption", "hightolow");
        localStorage.setItem("dropdownText", "High to Low");
        applySorting("hightolow");
        dropdownMenuButton.innerHTML = "High to Low";
    });

    lowtohigh.addEventListener("click", () => {
        localStorage.setItem("sortingOption", "lowtohigh");
        localStorage.setItem("dropdownText", "Low to High");
        applySorting("lowtohigh");
        dropdownMenuButton.innerHTML = "Low to High";
    });

    normal.addEventListener("click", () => {
        localStorage.setItem("sortingOption", "normal");
        localStorage.setItem("dropdownText", "Normal");
        applySorting("normal");
        dropdownMenuButton.innerHTML = "Normal";
    });


    searchBtn.addEventListener("click", () => {
        let searchvalue = searchInput.value.trim().toLowerCase();
        filtredproducts = products.filter((product) => product.title.toLowerCase().includes(searchvalue));
        document.querySelector(".cards").innerHTML = "";
        applySorting(localStorage.getItem("sortingOption") || "normal");




    });

    searchInput.addEventListener("input", () => {
        let searchvalue = searchInput.value.trim().toLowerCase();
        filtredproducts = products.filter((product) => product.title.toLowerCase().includes(searchvalue));
        localStorage.setItem("filtredproducts", JSON.stringify(filtredproducts));
        applySorting(localStorage.getItem("sortingOption") || "normal");
    });

    searchInput.addEventListener("input", () => {
        let searchvalue = searchInput.value.trim().toLowerCase();
        filtredproducts = products.filter((product) => product.title.toLowerCase().includes(searchvalue));
        // const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchvalue)).slice(0, 3);

        // if (filteredProducts.length > 0 && searchvalue) {
        //     searchDrop.innerHTML = filteredProducts.map(product => `
        //         <li class="d-flex align-items-center p-2 border-bottom">
        //             <div class="col-4">
        //                 <img src="${product.image}" alt="${product.title}" class="img-fluid">
        //             </div>
        //             <div class="col-7 ps-2">
        //                 <p class="product-title mb-1">${product.title.slice(0, 20)}...</p>
        //                 <p class="product-price text-success fw-bold">$${product.price}</p>
        //             </div>
        //         </li>
        //     `).join("");
        //     searchDrop.classList.remove("display");
        // } else {
        //     searchDrop.classList.add("display");
        // }
        localStorage.setItem("filtredproducts", JSON.stringify(filtredproducts));
        applySorting(localStorage.getItem("sortingOption") || "normal");
    });
    const searchDrop = document.querySelector(".searchdrop");

    searchInput.addEventListener("input", () => {
        const searchvalue = searchInput.value.trim().toLowerCase();
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchvalue)).slice(0, 3);

        if (filteredProducts.length > 0 && searchvalue) {
            searchDrop.innerHTML = filteredProducts.map(product => `
                <li class="d-flex align-items-center droplist">
                    <div class="col-5">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="col-7 drop-info">
                        <p class="product-title ">${product.title.slice(0, 18)}...</p>
                        <p class="product-price  ">$${product.price}</p>
                    </div>
                </li>
            `).join("");
            searchDrop.classList.remove("display");
        } else {
            searchDrop.classList.add("display");
        }
    });
    function applySorting(option) {
        if (option === "az") {
            filtredproducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (option === "za") {
            filtredproducts.sort((a, b) => b.title.localeCompare(a.title));
        } else if (option === "hightolow") {
            filtredproducts.sort((a, b) => b.price - a.price);
        } else if (option === "lowtohigh") {
            filtredproducts.sort((a, b) => a.price - b.price);
        }
        document.querySelector(".cards").innerHTML = "";
        createUserCard(filtredproducts);
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
               
                addBasket(product.id)
            });

            rating.append(ratingStar, count);
            cardFooter.append(price, rating, heart);
            cardContent.append(cardTitle, category);
            card.append(image, cardContent, cardFooter, addBtn);
            image.append(img);
            cardsContainer.appendChild(card);
        });
    }


    // function addBasket(productId, products) {
    //     if (!isCurrentuser) {
    //         toast("Please login to add to basket");
    //         setTimeout(() => {
    //             window.location.href = "login.html";
    //         }, 1000);
    //         return;
    //     }

    //     let userIndex = users.findIndex((user) => user.id === isCurrentuser.id);
    //     if (userIndex === -1) {
    //         toast("User not found");
    //         return;
    //     }

    //     if (!isCurrentuser.basket) {
    //         isCurrentuser.basket = [];
    //     }

    //     let product = products.find((product) => product.id === productId);
    //     if (!product) {
    //         toast("Product not found");
    //         return;
    //     }

    //     let existProduct = isCurrentuser.basket.find((item) => item.id === productId);
    //     if (existProduct) {
    //         existProduct.count++;
    //     } else {
    //         isCurrentuser.basket.push({ ...product, count: 1 });
    //     }

    //     users[userIndex] = isCurrentuser;
    //     localStorage.setItem("users", JSON.stringify(users));
    //     toast("Basket updated successfully");
    //     updateBasketCount(isCurrentuser.basket);
    // }


    // function updateBasketCount(basket = []) {
    //     let basketElement = document.querySelector(".basketIcon sup");
    //     let basketCount = basket.reduce((acc, product) => acc + product.count, 0);
    //     if (basketElement) {
    //         basketElement.textContent = basketCount;
    //     }
    // }

    // function toggleAddWishList(productId, products, heartElement) {
    //     if (!isCurrentuser) {
    //         toast("Please login to add to wishlist");
    //         return;
    //     }

    //     let userIndex = users.findIndex((user) => user.id === isCurrentuser.id);

    //     if (isCurrentuser.wishList.some((item) => item.id === productId)) {
    //         let productIndex = isCurrentuser.wishList.findIndex((product) => product.id === productId);
    //         isCurrentuser.wishList.splice(productIndex, 1);
    //         users[userIndex] = isCurrentuser;
    //         localStorage.setItem("users", JSON.stringify(users));
    //         toast("Product removed from wishlist");

    //         heartElement.classList.toggle("fa-regular");
    //         heartElement.classList.toggle("fa-solid");
    //     } else {
    //         let product = products.find((product) => product.id === productId);
    //         isCurrentuser.wishList.push(product);
    //         users[userIndex] = isCurrentuser;
    //         localStorage.setItem("users", JSON.stringify(users));
    //         toast("Product added to wishlist");

    //         heartElement.classList.toggle("fa-regular");
    //         heartElement.classList.toggle("fa-solid");
    //     }
    // }

    // function toast(message) {
    //     let toastMessage = document.createElement("div");
    //     toastMessage.classList.add("toast");
    //     toastMessage.textContent = message;
    //     document.body.appendChild(toastMessage);
    //     setTimeout(() => {
    //         toastMessage.remove();
    //     }, 2000);
    // }



    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchDrop.contains(e.target)) {
            searchDrop.classList.add("d-none");
        }
    });

    function addBasket(productId) {
        if (!isCurrentuser) {
            toastred("Please login to choose");
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
            toast("Product not found:", productId);
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

        toast("Basket updated sucsesfully");
        updatebasketCount();

    }

    
    // addBtn.addEventListener("click", () => {
    //     addBasket(product.id);
    // });


    function updatebasketCount(){
        let basketElement=document.querySelector(".basketIcon sup");
        console.log(basketElement);
        let basketCount=isCurrentuser.basket.reduce((acc,product)=>acc+product.count,0);
        basketElement.textContent=basketCount;

    }
  
    function toggleAddWishList(productId, heartElement) {

        console.log(productId);
        if (!isCurrentuser) {
            toastred("Please login to add wishlist");
            return;
        }
        let usersIndex = users.findIndex((user) => user.id == isCurrentuser.id);
        console.log(usersIndex);

        if (isCurrentuser.wishList.some((item) => item.id === productId)) {
            let productIndex = isCurrentuser.wishList.findIndex((product) => product.id === productId);
            isCurrentuser.wishList.splice(productIndex, 1);
            users[usersIndex] = isCurrentuser;
            localStorage.setItem("users", JSON.stringify(users));
            toastred("products removed ");

            heartElement.classList.toggle("fa-regular");
            heartElement.classList.toggle("fa-solid");
        }
        else {
            let product = products.find((product) => product.id === productId);
            isCurrentuser.wishList.push(product);
            users[usersIndex] = isCurrentuser;
            localStorage.setItem("users", JSON.stringify(users));
            toast("product added");


            heartElement.classList.toggle("fa-regular");
            heartElement.classList.toggle("fa-solid");
            console.log(heartElement);

        }

        function toast(text) {
            Toastify({
                text: `${text}`,
                duration: 2000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,

                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    color: "white",
                    paddingLeft: "100px",
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function () { }
            }).showToast();
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


    }
   

    function toast(text) {
        Toastify({
            text: `${text}`,
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,

            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                color: "white",
                paddingLeft: "100px",
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { }
        }).showToast();
    }


    function toastred(text) {
        Toastify({
            text: `${text}`,
            duration: 500,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                color: "white",
                paddignLeft: "200px",

                background: "linear-gradient(90deg, rgba(36,18,0,1) 0%, rgba(121,18,9,1) 35%, rgba(255,101,0,1) 100%)",
            },
            onClick: function () { }
        }).showToast();
    }
    // createUserCard(products);
    updatebasketCount(isCurrentuser?.basket || []);

    changeUsername();
    logoutButton.addEventListener("click", logoutt);
});
