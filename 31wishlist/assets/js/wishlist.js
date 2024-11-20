document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let currentUser = users ? users.find((user) => user.isLogined === true) : null;

    // let link=document.querySelector(".link");
    // link.addEventListener("click",(e)=>{

    // })
    if (currentUser && currentUser.wishList.length > 0) {
        currentUser.wishList.forEach(product => {
            createWishlistItem(product);
        });
    }
    else{

        let empty = document.createElement("h3");
        empty.textContent = "Your wishlist is empty";
        empty.style.color="red";
        let wishlisContainer = document.querySelector(".wishlist");
        wishlisContainer.appendChild(empty)
    }
    function createWishlistItem(product) {
        let wishlistItem = document.createElement("div");
        wishlistItem.classList.add("wishlist-item");

        let image = document.createElement("div");
        image.classList.add("image");

        let img = document.createElement("img");
        let title = document.createElement("h4");
        title.classList.add("title");

        let category = document.createElement("p");
        category.classList.add("category");

        let price = document.createElement("p");
        price.classList.add("price");

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("btn", "btn-danger", "remove-btn");
        removeBtn.textContent = "Remove";

        image.appendChild(img);
        wishlistItem.append(image, title, category, price, removeBtn);

        let wishlisContainer = document.querySelector(".wishlist");
        wishlisContainer.appendChild(wishlistItem);

        img.src = product.image;
        title.textContent = product.title.slice(0, 20) + "...";
        category.textContent = product.category;
        price.textContent = product.price;
        removeBtn.addEventListener(("click"),()=>{
            removeItem(product.id);
        })


        function removeItem (productId) {

            let userIndex = users.findIndex((user) => user.id === currentUser.id);
            
            let productIndex = currentUser.wishList.findIndex(
            
            (product) => product.id === productId
            
            );
            
            if (productIndex !== -1) {
            
            currentUser.wishList.splice(productIndex, 1);
            
            users [userIndex] = currentUser;
            
            localStorage.setItem("users", JSON.stringify(users));
            
            toastred("Item removed from wishlist");
            setTimeout(()=>{
            window.location.reload();
                
            },1000)
            
            }
            
            }
    }
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
});
