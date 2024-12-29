// 1masala
// const fruits = ["apple", "banana", "cherry"];
// const [first, second, third] = fruits;
// const result = `${first}, ${second}, ${third}`;
// console.log(result);

// 2-masala
// const talabalar = { Anvar: 18, Jamila: 20, Mirza: 19 };
// const keys = Object.keys(talabalar);
// const { length: talabalarSoni } = keys;
// console.log(talabalarSoni);

// 3-masala
// const mahsulotlar = { olma: 3000, nok: 4000, banan: 2000 };

// const { olma, nok, banan } = mahsulotlar;

// const sum = olma + nok + banan;
// console.log(sum);

// 4-masala
// function Odam(ism) {
//   this.ism = ism;
// }

// Odam.prototype.gapir = function () {
//   const { ism } = this;
//   return `Salom, mening ismim ${ism}`;
// };

// const odam1 = new Odam("Ezoza");
// console.log(odam1.gapir());

// yoki ikkinchi oddiy yechim

// function Odam(ism) {
//   this.ism = ism;
// }

// Odam.prototype.gapir = function () {
//   return `Salom, mening ismim ${this.ism}`;
// };

// const odam1 = new Odam("Ezoza");
// console.log(odam1.gapir());

// 5-masala
// const matn = "hello";
// const [h, e, l1, l2, o] = [...matn];
// const kattaMatn = `${h.toUpperCase()}${e.toUpperCase()}${l1.toUpperCase()}${l2.toUpperCase()}${o.toUpperCase()}`;
// console.log(kattaMatn);

// yoki ikkinchi oddiy yechim
// const matn = "hello";
// const kattaMatn = matn.toUpperCase();
// console.log(kattaMatn);

// 6-masala
// const massiv = [1, 2, 3];
// const yangiElement = 4;
// const [...yangiMassiv] = massiv;
// yangiMassiv.push(yangiElement);
// console.log(yangiMassiv);

// 7-masala
// const massivUzunlik = [7, 8, 9];
// const { length: uzunlik } = massivUzunlik;
// console.log(uzunlik);
