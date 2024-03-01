// let arr = [
//     {item: 'chai', price: 5},
//     {item: 'coffee', price: 55},
//     {item: 'lemontea', price: 35},
//     {item: 'maslaChai', price: 15},
//     {item: 'AdrakChai', price: 25}
// ];

// const calculateTotalCartValue = function (items) {
//     let total = 0;
//     items.forEach(item => {
//         total += item.price;
//     });
//     return total;
// }

// console.log(calculateTotalCartValue(arr));


function calculateTotalCartValue() {
    let totalvalue = 0;
    for (let i = 0; i < arguments.length; i++) {
        totalvalue += arguments[i];
    }
    console.log(`total value of cart ${totalvalue}`);
    return totalvalue;
}
calculateTotalCartValue(125,5,25)