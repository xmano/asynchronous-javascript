async function getIngredientRevised(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

(async () => {
    const ingredient1 = await getIngredientRevised(5);
    const ingredient2 = await getIngredientRevised(10);

    const sum = ingredient1 + ingredient2;

    console.log('First ingredient: ' + ingredient1);
    console.log('Second ingredient: ' + ingredient2);
    console.log('Sum: ' + sum);
})();