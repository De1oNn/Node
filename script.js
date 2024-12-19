const fs = require('fs');

//function that print all the text inside txt
fs.readFile('input.txt', function(err, data) {
    console.log(data.toString());
});
//function that print all the text inside txt
fs.readFile('task1.txt', function(err, word) {
    console.log(word.toString());
});
//function that find a especific word
fs.readFile('task1.txt', function(findbanana,str) {
    const bana = "banana";
    if (str.includes(bana)) {
        console.log('is found');
    } 
})
//function that find a words next word
fs.readFile('task1.txt',  "utf8", function(findaword, next) {
    const after = next.split(' ');
    for (let i = 0; i < after.length; i++){
        if (after[i] === "banana"){
            console.log(after[i + 1]);
            return
        }
    }
})
//function that merge 2 files.
function mergefiles(file1, file2, mergedata) {
    try {
        const task1 = fs.readFileSync(file1, 'utf-8');
        const task2 = fs.readFileSync(file2, 'utf-8');
        const mergedata1 = task1 + '\n' + task2;
        fs.writeFileSync(mergedata, mergedata1, 'utf-8');
        console.log('nice');
    } catch (err) {
        console.log('no');
    }
} 
const file1 = 'task1.txt'
const file2 = 'task2.txt'
const mergedata = 'mergedata.txt'

mergefiles(file1, file2, mergedata)



