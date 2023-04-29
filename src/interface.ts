interface Item {
    name: string;
    price: number;
    purchased(message: string): void;
}

let product1: Item = {
    name: 'スマホケース',
    price: 1000,
    purchased(message: string) {
        console.log(message);
    }
}

product1.purchased('スマホケースを購入しました。');