const card = document.createElement("div");
card.style.width = '400px';
// card.style.height = '700px';
card.style.border = '1px solid #E7ECF2';
card.style.borderRadius = '10px';
card.style.overflow = "hidden";
card.style.margin = "0 auto";
const cardImage = document.createElement("div");
cardImage.style.position = "relative";


const img = document.createElement("img");
img.src = "https://picsum.photos/seed/picsum/400/300";

img.alt = "random image";




const likebtn = document.createElement("button");
likebtn.textContent = "♡";
likebtn.style.position = "absolute";
likebtn.style.fontSize = "30px";
likebtn.style.padding = "5px";
likebtn.style.color = "white";
likebtn.style.right = "10px";
likebtn.style.top = "5px";
likebtn.style.backgroundColor = "transparent";
likebtn.style.border = "none";

likebtn.addEventListener("click", () => {
    if (likebtn.textContent === "♡") {
        likebtn.textContent = "🎔";
        likebtn.style.color = "red";

    }
    else {
        likebtn.textContent = "♡";
        likebtn.style.color = "white";
    }
});


const cardInfo = document.createElement("div");
cardInfo.classList.add("cardinfo");
// cardInfo.style.padding="20px";
cardInfo.backgroundColor = "#F7FAFC";
cardInfo.style.fontFamily = "sans-serif";


const houseage = document.createElement("p");
houseage.textContent = "DETACHED HOUSE • 5Y OLD";
houseage.style.color = "grey";
houseage.style.fontSize = "14px";
houseage.style.fontWeight = "bolder";
houseage.style.padding = "5px 20px";
houseage.style.fontFamily = "sans-serif";

cardInfo.appendChild(houseage);



const price = document.createElement("p");
price.textContent = "$750,000";
price.style.fontSize = "27px";
price.style.margin = "2px 0px";
price.style.padding = "8px 20px";
cardInfo.appendChild(price);




const housedesc = document.createElement("p");
housedesc.textContent = "742 Evergreen Terrace";
housedesc.style.color = "grey";
housedesc.style.fontSize = "14px";
housedesc.style.padding = "5px 20px";
cardInfo.appendChild(housedesc);

const features = document.createElement("div");
features.style.display = "flex";
features.style.justifyContent = "space-between";
features.style.marginTop = "13px";
features.style.fontSize = "14px"
features.style.borderTop = "1px solid #E7ECF2";
features.style.borderBottom = "1px solid #E7ECF2";
features.style.padding = "20px 20px";



const bedrooms = document.createElement("span");
bedrooms.innerHTML = "<i class='fa-solid fa-bed'></i>  <span style='color:black; font-weight:bolder'>  3</span> Bedrooms";

bedrooms.style.color = "grey";
features.appendChild(bedrooms);


const bathrooms = document.createElement("div");
bathrooms.innerHTML = "<i class='fa-solid fa-bath'></i>    <span style='color: black;font-weight:bolder' >2</span> Bathrooms";
bathrooms.style.color = "grey"
features.appendChild(bedrooms);
features.appendChild(bedrooms);
features.appendChild(bathrooms);
cardInfo.appendChild(features);

const realtorSection = document.createElement("div");
realtorSection.style.backgroundColor = "#F7FAFC";
realtorSection.style.padding = "4px 20px";
realtorSection.style.fontFamily = "sans-serif";



const realtortext = document.createElement("p");
realtortext.textContent = "REALTOR";
realtortext.style.fontWeight = "bolder";
realtortext.style.color = "grey";
realtortext.style.margin = "5px 0px";
realtortext.style.padding = "0px";

realtorSection.appendChild(realtortext);

const realtorInfo = document.createElement("div");
realtorInfo.style.display = "flex";
realtorInfo.style.gap = "20px";
realtorInfo.style.alignItems = "center"
realtorSection.appendChild(realtorInfo);



const realtorImg = document.createElement("img");
realtorImg.src = "https://picsum.photos/50";
realtorImg.style.height = "50px"
realtorImg.style.borderRadius = "100%";

realtorInfo.appendChild(realtorImg);

const realtorText = document.createElement("div");
realtorInfo.appendChild(realtorText);


const realtorName = document.createElement("p");
realtorName.textContent = "Tiffany Heffner";
realtorName.style.fontSize = "14px";

realtorName.style.fontWeight = "bolder";
realtorText.appendChild(realtorName);

const realtorNumber = document.createElement("p");
realtorNumber.textContent = "(555) 555-4321";
realtorNumber.style.color = "grey"

realtorText.appendChild(realtorNumber);



cardImage.appendChild(likebtn);
cardImage.appendChild(img);
card.appendChild(cardImage);
card.appendChild(cardInfo);
card.appendChild(realtorSection);
document.body.appendChild(card);

