// const greet = (name: string) => {
//     return `Bonjour ${name}`;
// }

// console.log(greet('Harry'))
// const nums = [1, 2, 3, 4];

// nums.map((num) => num * 3);

// const words = ["chat", "chien", "voiture", "code"];
// let words_filter = words.filter((word) => word.length > 4);
// console.log(words_filter);

// const prices = [10, 5, 30];

// prices.reduce((total: number, price: number) => {
//     return total + price;
// }, 0);

// type Car = {
//     brand:  string;
//     model:  string;
//     year:  number;
//     info: () => {}
// }

// type Country = "Gabon";
// type Ethnicity = "Fang";
// type School = "Sainte Marie" | "Bessieux";

// type Gabriellle = {
//     firstName: string;
//     lastName: string;
//     country: Country;
//     ethnicity: Ethnicity;
//     school: School;
// }

// const MyWife : Gabriellle = {
//     firstName: "Gabrielle",
//     lastName: "MBANG",
//     country: "Gabon",
//     ethnicity: "Fang",
//     school: "Sainte Marie",
// }

type Product = {
    id: number;
    name: string;
    price: number;
    category: "food" | "tech" | "other";
}

let products: Product [] = [
  { id: 1, name: "Manioc", price: 500, category: "food" },
  { id: 2, name: "PC Portable", price: 300000, category: "tech" },
];