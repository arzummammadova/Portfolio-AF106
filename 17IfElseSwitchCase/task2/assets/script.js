// 2) Mövsümə görə Ayların Göstərilməsi
// Tapşırıq təfərrüatları:
// 1.Mövsüm Daxil Edin
// 2.Mövsümə Görə Ayları Göstərin
// Switch-Case ile yazmaq
// Mövsümü daxil edin


let season = prompt("Mövsümü daxil edin:\nSpring\nSummer\nAutumn\nWinter");


switch (season) {
    case 'Spring':
    case 'spring':
        alert("March\nApril\nMay");
        break;
    case 'Summer':
    case 'summer':
        alert("June\nJuly\nAugust");
        break;
    case 'Autumn':
    case 'autumn':
        alert("September\nOctober\nNovember");
        break;
    case 'Winter':
    case 'winter':
        alert("December\nJanuary\nFebruary");
        break;
    default:
        alert("Try again ");
        break;
}
