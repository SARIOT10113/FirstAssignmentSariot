
//   if you run this code just type >>> npm start

import  StudentInfo  from "./index.js";


StudentInfo.push({Name:"Rabbil hasan", Roll:"21", Department:"Civil Technology", City:"Dhaka"}); // add item 

StudentInfo.shift()  // remove the first item
StudentInfo.unshift({Name:"rabul hasan", Roll:"09", Department:"Civil Technology", City:"khulna"}) // add the first item

StudentInfo.pop(); // remove last item 

const findOnlyName = StudentInfo.map((item ,i)=>{
    console.log(item.Name)     //.... only show array Name
    console.log(item.Roll)     //.... only show array Roll
    console.log(i)              //.... index numbar

    const cityItem = item.City; 
    console.log(cityItem.CurrentAddress)  // find current Address 

})

console.log( StudentInfo); // get all items in console

