document.addEventListener("DOMContentLoaded", async () => {
    const getProducts = async () => {
        let response = await axios("https://fakestoreapi.com/products");
        let products = response.data;
        return products;

    }
    let products = await getProducts();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let isCurrentuser = users.find((user) => user.isLogined === true);

    let containerDetails = document.querySelector(".product-container");

  
    // async function getProducts() {
    //     try {
    //         let response = await fetch('/assets/js/db.json'); 
    //         if (!response.ok) {
    //             throw new Error("Məhsullar alınarkən xəta baş verdi");
    //         }
    //         let data = await response.json();
    //         return data.products; 
    //     } catch (error) {
    //         console.error("Xəta: ", error);
    //         return [];
    //     }
    // }


    function createProductDetail(findProduts) {
        let productImageDiv = document.createElement('div');
        productImageDiv.classList.add('product-image');
        let productImage = document.createElement('img');
        productImage.src = findProduts.image;
        productImage.alt = 'Product';
        productImageDiv.appendChild(productImage);

        let productDetailsDiv = document.createElement('div');
        productDetailsDiv.classList.add('product-details');

        let productTitle = document.createElement('h1');
        productTitle.classList.add('product-title');
        productTitle.textContent = `Product ${findProduts.title}`;

        let productCategory = document.createElement('p');
        productCategory.classList.add('product-category');
        productCategory.textContent = `Category: ${findProduts.category}`;

        let productPrice = document.createElement('p');
        productPrice.classList.add('product-price');
        productPrice.textContent = `$${findProduts.price}`;

        let productDescription = document.createElement('p');
        productDescription.classList.add('product-description');
        productDescription.textContent = `This is an amazing product that offers incredible top-notch performance. Designed with care and built to meet all your needs and exceed expectations.`;

        let productRatingDiv = document.createElement('div');
        productRatingDiv.classList.add('product-rating');

        let ratingStars = document.createElement('span');
        ratingStars.textContent = `★ ${findProduts.rating.rate}`;

        let reviewCount = document.createElement('span');
        reviewCount.textContent = `(${findProduts.rating.count}) reviews`;

        productRatingDiv.appendChild(ratingStars);
        productRatingDiv.appendChild(reviewCount);

        let quantitySelectorDiv = document.createElement('div');
        quantitySelectorDiv.classList.add('quantity-selector');

        let btnMinus = document.createElement('button');
        btnMinus.classList.add('btn-minus', 'disabled');
        btnMinus.textContent = '-';

        let quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '1';
        quantityInput.value = getStoredQuantity();

        if (parseInt(quantityInput.value) === 1) {
            btnMinus.classList.add('disabled');
        }

        let btnPlus = document.createElement('button');
        btnPlus.classList.add('btn-plus');
        btnPlus.textContent = '+';

        btnMinus.addEventListener('click', () => handleMinusClick(quantityInput, btnMinus, btnPlus));
        btnPlus.addEventListener('click', () => handlePlusClick(quantityInput, btnMinus, btnPlus));

        quantitySelectorDiv.appendChild(btnMinus);
        quantitySelectorDiv.appendChild(quantityInput);
        quantitySelectorDiv.appendChild(btnPlus);

        let addToCartButton = document.createElement('button');
        addToCartButton.classList.add('btn', 'btn-danger', 'add-to-cart-btn');
        addToCartButton.textContent = 'Add to Cart';

        addToCartButton.addEventListener('click', () => {
            addBasket(findProduts.id, parseInt(quantityInput.value));
        });

        containerDetails.appendChild(productImageDiv);
        containerDetails.appendChild(productDetailsDiv);

        productDetailsDiv.appendChild(productTitle);
        productDetailsDiv.appendChild(productCategory);
        productDetailsDiv.appendChild(productPrice);
        productDetailsDiv.appendChild(productDescription);
        productDetailsDiv.appendChild(productRatingDiv);
        productDetailsDiv.appendChild(quantitySelectorDiv);
        productDetailsDiv.appendChild(addToCartButton);

        let basketlink = document.querySelector(".basketlink");

        basketlink.addEventListener("click", function () {
            link(basketlink);
        });

        function getStoredQuantity() {
            let storedQuantity = localStorage.getItem('productQuantity');
            return storedQuantity ? parseInt(storedQuantity) : 1;
        }

        function setQuantityInLocalStorage(quantity) {
            localStorage.setItem('productQuantity', quantity);
        }

        function handleMinusClick(quantityInput, btnMinus, btnPlus) {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
                setQuantityInLocalStorage(quantityInput.value);
            }
            if (parseInt(quantityInput.value) === 1) {
                btnMinus.classList.add('disabled');
            }
            btnPlus.classList.remove('disabled');
        }

        function handlePlusClick(quantityInput, btnMinus, btnPlus) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            setQuantityInLocalStorage(quantityInput.value);
            if (parseInt(quantityInput.value) > 1) {
                btnMinus.classList.remove('disabled');
            }
        }

        function link() {
            if (!isCurrentuser) {
                toastred("Please login ");
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 2000);
                return;
            } else {
                window.location.href = "basket.html";
            }
        }

        function toast(text) {
            Toastify({
                text: `${text}`,
                duration: 2000,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    color: "white",
                    paddingLeft: "100px",
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        }

        function toastred(text) {
            Toastify({
                text: `${text}`,
                duration: 500,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    color: "white",
                    paddingLeft: "200px",
                    background: "linear-gradient(90deg, rgba(36,18,0,1) 0%, rgba(121,18,9,1) 35%, rgba(255,101,0,1) 100%)",
                }
            }).showToast();
        }
        
        
        function addBasket(productId, quantity) {
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
                existProduct.count += quantity; 
            } else {
                isCurrentuser.basket.push({ ...product, count: quantity });
            }
    
            users[userIndex] = isCurrentuser;
    
            localStorage.setItem("users", JSON.stringify(users));
    
            toast("Basket updated successfully");
            updatebasketCount();
        }
    }

   
 

    if (products.length === 0) {
        console.error("Məhsullar tapılmadı");
        return;
    }

    const productId = parseInt(new URLSearchParams(window.location.search).get('id'));
    const findProduts = products.find((product) => product.id === productId);

    if (!findProduts) {
        console.error("Product not found");
        return;
    }

    createProductDetail(findProduts);
});
