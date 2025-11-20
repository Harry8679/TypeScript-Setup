// const greet = (name: string) => {
//     return `Bonjour ${name}`;
// }
// console.log(greet('Harry'))
const nums = [1, 2, 3, 4];
nums.map((num) => num * 3);
const words = ["chat", "chien", "voiture", "code"];
let words_filter = words.filter((word) => word.length > 4);
console.log(words_filter);
const prices = [10, 5, 30];
prices.reduce((total, price) => {
    return total + price;
}, 0);
const MyWife = {
    firstName: "Gabrielle",
    lastName: "MBANG",
    country: "Gabon",
    ethnicity: "Fang",
    school: "Sainte Marie",
};
export {};
//# sourceMappingURL=app.js.map