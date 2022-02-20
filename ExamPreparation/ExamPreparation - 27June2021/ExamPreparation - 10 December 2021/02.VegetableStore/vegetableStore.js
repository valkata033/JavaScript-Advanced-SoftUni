class VegetableStore {

    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables (vegetables){
        let types = new Set();

        for (const vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            types.add(type);
            let vegi = this.availableProducts.find(x => x.type === type);
            
            if(this.availableProducts.some(x => x.type === type)){
                vegi.quantity += quantity;

                if(price > vegi.price){
                    vegi.price = price;
                }
            }   
            else{
                this.availableProducts.push({
                    type,
                    quantity,
                    price
                });
            }
        }

        return `Successfully added ${Array.from(types).join(', ')}`;
    }

    buyingVegetables (selectedProducts){
        let totalPrice = 0;

        for (const product of selectedProducts) {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);
            let vegi = this.availableProducts.find(x => x.type === type);

            if(!this.availableProducts.some(x => x.type === type)){
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if(quantity > vegi.quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += quantity * vegi.price;
            vegi.quantity -= quantity;
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable (type, quantity){

        if(!this.availableProducts.some(x => x.type === type)){
            throw new Error(`${type} is not available in the store.`);
        }

        let vegi = this.availableProducts.find(x => x.type === type);

        if(vegi.quantity <= Number(quantity)){
            vegi.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        vegi.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision (){
        let result = [];
        result.push("Available vegetables:");

        this.availableProducts.sort((a,b) => a.price - b.price)
        .forEach(x => result.push(`${x.type}-${x.quantity}-$${x.price}`));

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }

}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


