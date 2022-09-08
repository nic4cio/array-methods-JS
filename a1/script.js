let products = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(`1. lista de produtos: ${products}`);
console.log(`2. a lista possui ${products.length} produtos`);


const findProduct = (arr, product) => {
    //copying the array
    let copiedArray = [...arr];
    //finding the index
    const index = copiedArray.findIndex((element) => element === product);

    if (index !== -1){
        return product;
    } else {
        return `Não existe na lista o produto ${product}`;
    }
    
}

const removeProduct = (arr, product) => {
    //copying the array
    let copiedArray = [...arr]; //spread operator
    //finding the index
    const index = copiedArray.findIndex((element) => element === product);
    //splicing
    if(index !== -1){
        copiedArray.splice(index, 1);
        return copiedArray;
    }
}

const removeIndex = (arr, index) => {
    //copying the array]
    let copiedArray = [...arr]
    //removing by index
    copiedArray.splice(index, 1);
    return copiedArray;
}

console.log(`3. a lista de produtos sem o Mouse: ${removeProduct(products, "Mouse")}`);
console.log(`4. fazendo uma busca na lista pelo produto Computador: ${findProduct(products, "Computador")}`);
console.log(`4.1 fazendo uma busca na lista pelo produto PenDrive: ${findProduct(products, "Pendrive")}`);
console.log(`5. removendo o segundo item da lista ${products} temos: ${removeIndex(products, 1)}`);