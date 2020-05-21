"use stcrict";
// const getUser = ((userusers.forEach((user) => console.log(user.name));
// const users = [
//   { name: "Denis", age: 22, height: 167 },
//   { name: "Ihor", city: "Kharkiv" },
//   { age: 22, height: 199 },
//   { city: "Lviv", phone: "+38050505050" },
// ];
// Создать новый масссив cleanPeopleData, в который положить трансформированный
//  массив newPeopleData. в нем не должно быть полей со значением undefined
//  и должно появиться новое поле index. то есть, {name: "Denis", city: undefined}
//  должен превратиться в {name: “Denis”, index: 0}
//
// const peopleData = [
//   { name: "Denis", age: 22, height: 167 },
//   { name: "Ihor", city: "Kharkiv" },
//   { age: 22, height: 199 },
//   { city: "Lviv", phone: "+38050505050" },
// ];
// const newPeopleData = peopleData.map((i) => ({ name, city }));

// const array = [
//     { name: "Denis", age: 22, height: 167 },
//     { name: "Ihor", city: "Kharkiv" },
//     { age: 22, height: 199 },
//     { city: "Lviv", phone: "+38050505050" },
//   ];

//   const arrayName = array.forEach((obj) => {
//     if (obj.name) {
//       console.log(obj);
//     } else {
//     }
//   });
//  ======== Nepsha
// const arr = [
//     { name: 'Denis', age: 22, height: 167 },
//     { name: 'Ihor', city: 'Kharkiv' },
//     { age: 22, height: 199 },
//     { city: 'Lviv', phone: '+38050505050' },
//   ];

//   arr.forEach(i => {
//     if ('name' in i) {
//       console.log(i);
//     }
//   });
// ================================

// const cleanPeople2 = newPeopleData.map((i, index) => {
//     const existedEntries = Object.entries(i).filter(([key, value]) => value)
//     return {...Object.fromEntries(existedEntries), index}
// })
// ========================
// Отфильтровать червяков и оставить только тех, у которых возраст меньше 20
// Затем добавить оставшимся зубы (claws: true)
// Или teeth: true
// const wormFilter = (worms) => {
//   worms.filter((worm) => worm.age < 20).map((worms.claws = "true"));
// };
// const wormFind = (worms) => worms.find((worm) => worm.name === "Анатолий");

// const worms = [
//   { name: "Артем", length: 15, age: 5 },
//   { name: "Илья", length: 10, age: 2 },
//   { name: "Анатолий", length: 200, age: 67 },
// ];
// console.log(wormFind(worms));
//
//=======================Червяки. some и map и every
// использовать some, чтобы узнать, есть ли хотя бы один пятнадцатилетний  червяук
// червяк*
// Изменить червяков с помощью map таким образом, чтобы worms.every(…) возвращало true
//
// переменной wormSome присваиваем результат работы some при услови...
// const wormSome = (worms) => worms.some((worm) => worm.length === 15);
//
// const wormMap = (worms) =>
//   worms
//     .map((worm) => ({ ...worm, length: 15 }))//  перебираеи массив worms распыляем в него єлемент worm
//  добавляем каждому worm ключ length и значение 15
//     .every((worm) => worm.length === 15);// перебираем с помощью every массив wormMap
//                                          //  и выводим в console.log(wormMap(worms))
// const worms = [
//   { name: "Артем", length: 15, age: 5 },
//   { name: "Илья", length: 10, age: 2 },
//   { name: "Анатолий", length: 200, age: 67 },
// ];
// console.log(wormSome(worms)); // true
// console.log(wormMap(worms)); // true
// // console.log(wormEvery(worms));
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
"use strict";
const getNamesSortedByFriendsCount = (users) =>
  // сортируем users по условию длинны массива ключа friends;
  users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(({ name }) => name); // формируем массив имен отсортированных обьектов

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
