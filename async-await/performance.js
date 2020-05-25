function getIngredientSlow(max) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * Math.floor(max)));
        }, 3 * 1000)
    })
    
}

(async () => {
    const start = new Date();
    const ingredient1 = await getIngredientSlow(5);
    const ingredient2 = await getIngredientSlow(10);

    // const ingredient1Promise = getIngredientSlow(5);
    // const ingredient2Promise = getIngredientSlow(10);
    // const ingredient1 = await ingredient1Promise;
    // const ingredient2 = await ingredient2Promise;

    const sum = ingredient1 + ingredient2;

    console.log('First ingredient: ' + ingredient1);
    console.log('Second ingredient: ' + ingredient2);
    console.log('Sum: ' + sum);

    console.log('Running Time: ' + (new Date() - start) + 'ms');
})();