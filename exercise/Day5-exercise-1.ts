// Day 5 - Exercise 1

interface IItem {
    id: number;
    title: string;
    variantId?: number;
}

function addToCart(item: IItem) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'shoes'});
