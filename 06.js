const productDetails = {
    name : 'Apple Macbook Pro',
    price : 160000,
    color : 'Grey',
    harddisk : "256 GB"
};

// console.log(`Below are the product Details :`);
// for (let keys of Object.keys (productDetails)) {
//     console.log(`${keys} : ${productDetails[keys]}`);
// }

console.log("Below are the product details.");
for (const key in productDetails) {
  if (productDetails.hasOwnProperty(key)) {
    console.log(`${key}: ${productDetails[key]}`);
  }
}