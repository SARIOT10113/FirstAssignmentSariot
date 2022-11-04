
//   if you run this code just type >>> npm start /npm run start-dev

import  StudentInfo  from "./index.js";


StudentInfo.push({Name:"Rabbil hasan", Roll:"21", Department:"Civil Technology", City:"Dhaka"}); // add item 

StudentInfo.shift()  // remove the first item
StudentInfo.unshift({Name:"rabul hasan", Roll:"09", Department:"Civil Technology", City:"khulna"}) // add the first item
StudentInfo.pop(); // remove last item 

const findOnlyName = StudentInfo.map((item ,i)=>{
    console.log(`This is student name: ${item.Name}`)     //.... only show array Name
    console.log(` This is student roll: ${item.Roll}`)     //.... only show array Roll

    const cityItem = item.City; 
    console.log(`This is a student current Address: ${cityItem.CurrentAddress}`)  // find current Address 
})

console.log( StudentInfo); // get all items in console
