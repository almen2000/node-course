const name = 'Alexandr';
const userAge = 19;

const user = {
    name: name,
    age: userAge,
    location: 'Armenia'
}

console.log(user);



const product = {
    label: 'Red notebook',
    price: 3,
    stock: 205,
    salePrice: undefined
}

const { label, price, stock, salePrice } = product;