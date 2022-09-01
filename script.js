// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// criancas valem por 0,5

let inputAdult = document.getElementById("adult");
let inputChildren = document.getElementById("children");
let inputDuration = document.getElementById("duration");

let res = document.getElementById("res");

function calc(){
    console.log("Calc...");

    let adult = inputAdult.value;
    let children = inputChildren.value;
    let duration = inputDuration.value;

    let qdtTotalMeat = meatPP(duration) * adult + (meatPP(duration) /2 * children);
    let qdtTotalBeer = beerPP(duration) * adult;
    let qdtTotalDrinks = drinksPP(duration) * adult + (drinksPP(duration) /2 * children);
    
    res.innerHTML = `<p>${qdtTotalMeat/1000} G of Meat</p>`
    res.innerHTML += `<p>${Math.ceil(qdtTotalBeer/355)} Beer Bottles</p>`
    res.innerHTML += `<p>${Math.ceil(qdtTotalDrinks/2000)} Water/Soda Bottles</p>`

}

function meatPP(duration){
    if (duration >= 6){
        return 650;
    } else{
        return 400;
    }
}

function beerPP(duration){
    if (duration >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function drinksPP(duration){
    if (duration >= 6){
        return 1500;
    } else{
        return 1000;
    }
}