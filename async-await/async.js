// import * as si from 'systeminformation';

function getIngredient(max) {
    return new Promise((resolve, reject) => {
        if (max < 1) {
            reject("Only positive numbers are accepted.")
        } else {
            resolve(Math.floor(Math.random() * Math.floor(max)));
        }
    });
}

Promise.all([getIngredient(5), getIngredient(10)]).then(ingredients => {
    console.log('First ingredient: ' + ingredients[0]);
    console.log('Second ingredient: ' + ingredients[1]);
    console.log('Sum: ' + ingredients.reduce((p,c) => p + c));
    console.log('--------------------------------------');
});

getIngredient(-1).catch(console.log);


async function getIngredientRevised(max) {
    if (max < 1) {
        throw "Only positive numbers are accepted.";
    } else {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

Promise.all([getIngredientRevised(5), getIngredientRevised(10)]).then(ingredients => {
    console.log('First ingredient: ' + ingredients[0]);
    console.log('Second ingredient: ' + ingredients[1]);
    console.log('Sum: ' + ingredients.reduce((p,c) => p + c));
    console.log('--------------------------------------');
});

getIngredientRevised(-1).catch(console.log);