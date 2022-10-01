const fs = require("fs");

const quote ="No beauty shines brighter than that of a good heart";

// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("Completed writing awesome.html");
// })

const quote2 =  "Live more, wory Less ";

//Task 1
// Create below files with quote 2 as content 
// /backup/
// text-1.html
// text-2.html
// text-3.html
// text-4.html
//....
//text-10.html

// for (let i = 1; i <= 10; i++ ) {
// fs.writeFile(`./Backup/text-${i}.html`, quote2, (err) => {
//             console.log(`Completed writing text-${i}.html`);
//         })
//     }


//Task 2  
// node file.js 5 - 5 files need to be created / text-1.html ... text-5.html
//destructuring 


// const [, , noOfFiles] = process.argv;
// console.log(noOfFiles);
// const quote3 = " Happy day ";
// for (let i = 1; i <= noOfFiles; i++ ) {
//     fs.writeFile(`./Backup/text-${i}.html`, quote3, (err) => {
//         console.log(`Completed writing text-${i}.html`);
//     })
// }


//Read a file

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.log("Error", err);
//     }
//     console.log("The content of the file is:", data);
// })


//append a file

// const niceQuote = "\nMake everyday a better one";


// fs.appendFile("./nice.txt", niceQuote, (err) => {
//     console.log("Completed writing nice.txt");
// })


// Delete file

// fs.unlink("./toDelete.txt", (err) => {
//     console.log("Deleted Successfully")
// })

//read directory 

// fs.unlink("./Backup/text-1.html", (err, files) => {
//   console.log("Deleted Successfully", files)
// })

// Task - Delete all files in Backup folder


// fs.readdir("./Backup", (err, data) => {
//     // console.log(data)
//     data.forEach(fileName => {
//         fs.unlink(`./Backup/${fileName}`, (err) => {
//        console.log("Deleted Successfully!!!!", fileName)
//      }) 
//      })
// })


//writeFile -> callStack -> webApis(whoever finishes writing first ) -> callBack Q -> call Stack

//writeFile, readFile, appendFile - async
//writeFileSync, readFileSync, appendFileSync - sync


const [, , noOfFiles] = process.argv;
console.log(noOfFiles);
const quote3 = " Happy day ";
for (let i = 1; i <= noOfFiles; i++ ) {
    fs.writeFile(`./Backup/text-${i}.html`, quote3, (err) => {
        console.log(`Completed writing text-${i}.html`);
    })
}

//npm init - package.json file
//npm i express 