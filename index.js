const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let ages=[25,30,18,22,27];

let students=[{
  name:"Rahul",
  rollNo:101,
  marks:85
},
{
  name:"Sita",
  rollNo:102,
  marks:95
},
{
  name:"Amit",
  rollNo:103,
  marks:70
}];


let cars=[
  {
    make:'Maruti',
    model:'Swift',
    mileage:15
  },
  {
    make:'Hyundai',
    model:'i20',
    mileage:18
  },
  {
    make:'Tata',
    model:'nexon',
    mileage:20
  }
];

function sortAscendingOrder(age1,age2){
 return age1-age2;
}

function sortDescendingOrder(age1,age2){
  return age2-age1;
 }

 function sortStudentMarksInDescending(student1,student2){
 return student2.marks-student1.marks;
 }

 function sortCarsMileageInDescending(car1, car2){
  return car2.mileage-car1.mileage;
 }

app.get('/ages/sort-ascending',(req, res)=>{
  let agesCopy=ages.slice(); //slice() method is used to create copy of any array
  agesCopy.sort(sortAscendingOrder);
  res.json(agesCopy);
});

app.get('/ages/sort-descending',(req, res)=>{
  let agesCopy=ages.slice(); //slice() method is used to create copy of any array
  agesCopy.sort(sortDescendingOrder);
  res.json(agesCopy);
});

app.get('/students/sort-by-marks-descending',(req, res)=>{
 studentsCopy=students.slice();
 studentsCopy.sort(sortStudentMarksInDescending);
 res.json(studentsCopy);
})

app.get('/cars/sort-by-mileage-descending',(req, res)=>{
   let carsCopy=cars.slice();
   carsCopy.sort(sortCarsMileageInDescending);
   res.json(carsCopy);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
