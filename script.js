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
// import figlet from "figlet";

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

// pokemon
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
// import faker from '@faker-js/faker';

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


// npm install inquirer
import { log } from 'console';
import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            name: 'name',
            message: 'what is your name?',
        }
    ])
    .then((answers) => {
        console.log(answers)
        // Use user feedback for... whatever!!
    }) 
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    }); 
//node-schedule
// import schedule from 'node-schedule'
// // const schedule = require('node-schedule');

// const job = schedule.scheduleJob('42 * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });


// import player from 'play-sound'

// //var player = require('play-sound')(opts = {})

// // $ mplayer foo.mp3 
// player.play('foo.mp3', function(err){
//   if (err) throw err
// })

// // { timeout: 300 } will be passed to child process
// player.play('foo.mp3', { timeout: 300 }, function(err){
//   if (err) throw err
// })

// // configure arguments for executable if any
// player.play('foo.mp3', { afplay: ['-v', 1 ] /* lower volume for afplay on OSX */ }, function(err){
//   if (err) throw err
// })

// // access the node child_process in case you need to kill it on demand
// var audio = player.play('foo.mp3', function(err){
//   if (err && !err.killed) throw err
// })
// audio.kill()

// import qr from 'qr-image'
// // var qr = require('qr-image');
 
// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });