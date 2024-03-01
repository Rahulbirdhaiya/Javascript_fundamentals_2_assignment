// const products = [
//     {name: "Laptop", price: 120000},
//     { name: "Mobile", price: 70000},
//     { name: "Laptop Bag", price: 20000},
//     { name: "Watch", price: 20000},
//     {name: "Mobile Charger", price: 1500}
// ]

// function findMinMaxPrices() {
//     if (products.price >= 120000) {
//         let product = products.filter(p => p.price > 100000 && p.price < 2000)
//         console.log(`The product with maximum amount is ${product.name} for price ${product.price}`);
//         console.log(`The product with minimum amount is ${product.name} for price ${product.price}`);
//     } else {
//         console.log(`Invalid search`);
//     }
// }

// findMinMaxPrices();

  // Define the products array
  const products = [
    {name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    {name: "Mobile Charger", price: 1500 },
  ];
  

function findMinMaxPrices() {
    // Initialize min and max price variables
    let minPrice = Infinity;
    let maxPrice = -Infinity;
    let minPriceProduct = null;
    let maxPriceProduct = null;
  
    // Iterate through the products array
    for (let i = 0; i < products.length; i++) {
      // If the current product's price is lower than the current min price
      if (products[i].price < minPrice) {
        // Update the min price and the product associated with it
        minPrice = products[i].price;
        minPriceProduct = products[i];
      }
  
      // If the current product's price is higher than the current max price
      if (products[i].price > maxPrice) {
        // Update the max price and the product associated with it
        maxPrice = products[i].price;
        maxPriceProduct = products[i];
      }
    }
  
    // Print the results to the console
    console.log("The product with the maximum amount is " + maxPriceProduct.name + " which is priced at Rs. " + maxPrice);
    console.log("The product with the minimum amount is " + minPriceProduct.name + " which is priced at Rs. " + minPrice);
  }
  

  // Call the function with the products array
  findMinMaxPrices(products);