// const guests = ['Mithun', 'prabir', 'alka', 'shivam', 'farman'];

// let text = guests.join(", ") + ".";
// console.log(text);

const guest = ["Mithun", "Alka", "Prabir", "Shivam", "Farman"];
const output = guest.toString().replace(/,/g, ', ').concat('.');
console.log(output); // Mithun, Alka, Prabir, Shivam, Farman.