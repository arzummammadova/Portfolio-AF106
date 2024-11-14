// 1. Card uzerinde navigate ederek butun datalari bir objecte yigaraq consola yazdirin.Productu wishliste elave edirsiz ona gore heart clasina sahib olan div-den yola cixacaqsiniz.Her iki usulla ilk olaraq elementler uzerinde kecid ederek elave edeceksiniz daha sonra closest istfade ederek.

const heartIcon=document.querySelector(".heart");

let card=heartIcon.closest(".card");
let img=card.querySelector("img").src;
const title=card.querySelector(".cardTitle").textContent;

const text=card.querySelector(".cardText").textContent;
const price=card.querySelector(".cardPrice").textContent;
const btn=card.querySelector(".shopBtn").textContent;

let obj={
    img,
    text,
    price,
    btn,
    title
}

console.log(obj);


//2.Asagidaki stilleri card elementlerine verin.


card.style.margin='50px';
card.style.width='300px';
card.style.border='1px solid black';
card.style.padding='10px';


heartIcon.style.display='inline-flex';
heartIcon.style.alignItems = 'center';
heartIcon.style.justifyContent='center';
heartIcon.style.width='30px';
heartIcon.style.height='30px';
heartIcon.style.borderRadius='50%';
heartIcon.style.backgroundColor='silver';
heartIcon.style.position='absolute';
heartIcon.style.top = '15px';
heartIcon.style.right='15px';
heartIcon.style.cursor='pointer';


const image=card.querySelector('.image');
image.style.width='100%';
image.style.height='300px';
image.style.position='relative';


const imgg=image.querySelector('img');
imgg.style.width='100%';
imgg.style.height='100%';
imgg.style.borderRadius='10px';


const cardContent=card.querySelector('.cardContent');
cardContent.style.display='flex';
cardContent.style.flexDirection='column';
cardContent.style.alignItems='center';
cardContent.style.gap='10px';
cardContent.style.marginTop='20px';
cardContent.style.color='burlywood';


const cardPrice=card.querySelector(".cardPrice");
cardPrice.style.display='inline-block';
cardPrice.style.padding = '5px';
cardPrice.style.borderRadius = '5px';
cardPrice.style.backgroundColor = 'rgb(95, 94, 91)';
const shopBtn = card.querySelector('.shopBtn');
shopBtn.style.width = '100%';
shopBtn.style.padding = '10px';
shopBtn.style.backgroundColor = 'skyblue';
shopBtn.style.border = 'none';
shopBtn.style.cursor = 'pointer';
shopBtn.style.color = 'white';
shopBtn.style.textTransform = 'uppercase';
shopBtn.style.borderRadius = '5px';
shopBtn.style.fontWeight = 'bold';





// 3.Card elementlerini tek-tek secib contentlerini deyisin.Content serbestdir Her kes ucun.

const cardchangecontent=document.querySelector('.card');
cardchangecontent.querySelector('.cardTitle').innerHTML='Bu kard bashligidir';
cardchangecontent.querySelector('.cardText').innerHTML='bu kart metnidir';
cardchangecontent.querySelector('.cardPrice').innerHTML='100 USD';
cardchangecontent.querySelector('.shopBtn').innerHTML='buy later';

