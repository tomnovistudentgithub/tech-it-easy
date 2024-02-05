import {inventory} from "./inventory.js";


//Opdracht 1a: Gebruik een array-methode om een array te maken met daarin alle tv-type namen. Log de uitkomst in de console.

export const tvTypes = inventory.map(tv => tv.type + " - ");

export const tvNames = inventory.map(tv => tv.name + " - ");



//Opdracht 1b: Gebruik een array-methode om alle informatie te verzamelen van de tv's die volledig uitverkocht zijn. Log de uitkomst in de console.

export const soldOutTv = inventory.filter(tv => tv.originalStock === tv.sold);
console.log(soldOutTv);

//Opdracht 1c: Gebruik een array-methode om de informatie van het tv-type 'NH3216SMART' op te halen

export const tvType = inventory.find(tv => tv.type === 'NH3216SMART');
console.log(tvType);

//Opdracht 1d: Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of deze geschikt zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger). Doe dit in het format { name: 'Toshiba HD TV', suitable: false }. Log de uitkomst in de console.

export const suitableForSports = inventory.map(tv => {
    return {
        name: `${tv.brand} ${tv.name}`,
        suitable: tv.refreshRate >= 100
    }
} );

//Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.

export const largeScreenTv = inventory.filter(tv => tv.availableSizes.some(size => size >= 65));


//andere functie Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.

export const largeScreenTv2 = inventory.filter(tv => tv.availableSizes.includes(65) || tv.availableSizes.includes(75) || tv.availableSizes.includes(85));

//nog een andere //Opdracht 1e (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter.

export const largeScreenTv3 = inventory.filter(tv => tv.availableSizes.find(size => size >= 65));

//Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen van de tv's die over ambilight beschikken. Log de uitkomst in de console.

export const ambilightTv = inventory.filter(tv => tv.options.some(option => option.name === 'ambiLight'));