// const fs = require('fs');

// //function that print all the text inside txt
// fs.readFile('input.txt', function(err, data) {
//     console.log(data.toString());
// });
// //function that print all the text inside txt
// fs.readFile('task1.txt', function(err, word) {
//     console.log(word.toString());
// });
// //function that find a especific word
// fs.readFile('task1.txt', function(findbanana,str) {
//     const bana = "banana";
//     if (str.includes(bana)) {
//         console.log('is found');
//     } 
// })
// //function that find a words next word
// fs.readFile('task1.txt',  "utf8", function(findaword, next) {
//     const after = next.split(' ');
//     for (let i = 0; i < after.length; i++){
//         if (after[i] === "banana"){
//             console.log(after[i + 1]);
//             return
//         }
//     }
// })
// //function that merge 2 files.
// function mergefiles(file1, file2, mergedata) {
//     try {
//         const task1 = fs.readFileSync(file1, 'utf-8');
//         const task2 = fs.readFileSync(file2, 'utf-8');
//         const mergedata1 = task1 + '\n' + task2;
//         fs.writeFileSync(mergedata, mergedata1, 'utf-8');
//         console.log('nice');
//     } catch (err) {
//         console.log('no');
//     }
// } 
// const file1 = 'task1.txt'
// const file2 = 'task2.txt'
// const mergedata = 'mergedata.txt'

// mergefiles(file1, file2, mergedata)

// chalk
// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));


// figlet
// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// ora
// import ora from 'ora';

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
// 	spinner.color = 'yellow';
// 	spinner.text = 'Loading rainbows';
// }, 1000);

//pokemon
// const pokemon = require('pokemon');

// pokemon.all();
// //=> ['Bulbasaur', …]

// pokemon.random();
// //=> 'Snorlax'

// pokemon.getName(147);
// //=> 'Dratini'

// pokemon.getId('Dratini');
// //=> 147


//faker
// import { faker } from '@faker-js/faker';

// // CJS
// const { faker } = require('@faker-js/faker');

// export function createRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// });
// console.log(
//     faker.helpers.fake(
//       'Hello {{person.prefix}} {{person.lastName}}, how are you today?'
//     )
//   );

//npm install inquirer
// import inquirer from 'inquirer';

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
