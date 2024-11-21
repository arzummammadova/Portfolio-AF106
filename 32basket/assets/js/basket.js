let users = JSON.parse(localStorage.getItem("users"));
let currentUser = users.find((user) => user.isLogined === true);
let basket = currentUser.basket || [];

function createBasketItem() {
    let basketContainer=document.querySelector(".basket");
    basketContainer.innerHTML=' ';
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
            
            minusBtn.setAttribute("disabled", "true");
            minusBtn.textContent = "-";
            if (product.count <= 1) {
                minusBtn.setAttribute("disabled", "true");
            }

            minusBtn.addEventListener(("click"),()=>
            decrementCount(product.id,count));
        
            let count = document.createElement("p");
            count.classList.add("count");
            count.textContent = product.count;

            let plusBtn = document.createElement("button");
            plusBtn.classList.add("plus-btn");
            plusBtn.textContent = "+";


            plusBtn.addEventListener(("click"), () => incrementCount(product.id, count));



            let removeBtn = document.createElement("button");
            removeBtn.classList.add("btn", "btn-danger", "remove-btn");

            removeBtn.textContent = "Remove";

            countArea.append(minusBtn, count, plusBtn);
            image.appendChild(img);
            basketItem.append(image, title, category, price, countArea, removeBtn);
            let basketContainer = document.querySelector(".basket");
            basketContainer.append(basketItem);

            img.src = product.image;
            title.textContent = product.title.slice(0, 10) + "...";
            category.textContent = product.category;
            price.textContent = `$${product.price}`;
            count.textContent = product.count;
            updateMinusButton(minusBtn, product.count);
        });
    }

    else{
        let message=document.createElement("h1");
        message.textContent="Your basket is empty!!!!!!";
        basketContainer.appendChild(message);
        toastred("emptyyy add product for buy ")
        
    }
}


function clearBasket() {
    //local
    currentUser.basket = [];
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem("users", JSON.stringify(users));
    }
    basket = [];
    totalPrice=document.querySelector(".total-price")
    totalPrice.textContent="$0.00";

    createBasketItem();
}





function updateMinusButton(minusBtn, count) {
    if (count <= 1) {
        minusBtn.setAttribute("disabled", "true");
    } else {
        minusBtn.removeAttribute("disabled");
    }
}

function incrementCount(productId,countElement) {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    let exsistProduct = basket.find((product) => product.id === productId);
    if (exsistProduct) {
        exsistProduct.count++;
    }
    
    let basketItem=countElement.closest(".basket-item");
    let minusBtn=basketItem.querySelector(".minus-btn");
    let priceElement=basketItem.querySelector(".price");
    if(exsistProduct.count>1){
        minusBtn.removeAttribute("disabled");
    }


    let updatedPrice = exsistProduct.price * exsistProduct.count;
    priceElement.textContent = `$${updatedPrice.toFixed(2)}`
    countElement.textContent = exsistProduct.count;

    users[userIndex].basket = basket;
    localStorage.setItem("users", JSON.stringify(users));
totalPrice();


}

function decrementCount(productId, countElement) {
    let userIndex = users.findIndex((user) => user.id === currentUser.id);
    let exsistProduct = basket.find((product) => product.id === productId);
    
 
    if (exsistProduct && exsistProduct.count > 1) {
        exsistProduct.count--;
    }
    let basketItem=countElement.closest(".basket-item");
    let minusBtn = basketItem.querySelector(".minus-btn");
    let priceElement=basketItem.querySelector(".price");

    if (exsistProduct.count <= 1) {
        minusBtn.setAttribute("disabled", "true");
    }

    let updatedPrice = exsistProduct.price * exsistProduct.count;
    priceElement.textContent = `$${updatedPrice.toFixed(2)}`;
    countElement.textContent = exsistProduct.count;
    users[userIndex].basket = basket;
    localStorage.setItem("users", JSON.stringify(users));

totalPrice();}
function totalPrice(){
    let totalPrice=basket.reduce((total,product)=>{
        return total+(product.price*product.count)
    },0);
    document.querySelector(".total-price").textContent=`$${totalPrice.toFixed(2)}`;

}
totalPrice();

function toastred(text) {
    Toastify({
        text: text,
        duration: 500,
      
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        
        style: {
            color:"white",
            paddingLeft:"100px",
            background: "linear-gradient(90deg, rgba(36,18,0,1) 0%, rgba(121,18,9,1) 35%, rgba(255,101,0,1) 100%)",
        },
        onClick: function() {}
    }).showToast();
}




createBasketItem();



let clearBasketBtn = document.createElement("button");
clearBasketBtn.classList.add("btn", "btn-danger", "clear-basket-btn" ,"p-2");
clearBasketBtn.style.display = "block";
clearBasketBtn.style.width = "400px";
clearBasketBtn.style.margin = "20px auto"; 
clearBasketBtn.textContent = "Clear Basket";





clearBasketBtn.addEventListener("click", clearBasket);
document.body.appendChild(clearBasketBtn);
