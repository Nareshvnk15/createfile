const fs = require('node:fs');


const currentDateTime=new Date();
const year = currentDateTime.getFullYear();
const month=String(currentDateTime.getMonth()+1).padstart(2, '0');
const day = String(currentDateTime.getDate()).padstart(2,'0');
const hours = String(currentDateTime.getHours()).padstart(2,'0');
const minutes= String(currentDateTime.getMinutes()).padstart(2,'0');
const seconds = String(currentDateTime.getSeconds()).padstart(2,'0');


const fileName=`${year}${month}${day}_${hours}${minutes}${seconds}`;


fs.writeFile(`${fileName}.txt`,"hi","utf8",()=>{
    console.log("file created successfully");
});


