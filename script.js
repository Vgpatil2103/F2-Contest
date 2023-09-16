const data = [
  { name: "jon", age: 28, profession: "developer" },
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.filter((ele)=>{
    if(ele.profession=='developer'){
      console.log(ele);
    }
  })
}


// 2. Add Data
function addData() {
  
     newData = {
      name: prompt("Enter a name:"),
      age: parseInt(prompt("Enter an age:")),
      profession: prompt("Enter a profession:"),
    };
    data.push(newData);
    console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  let newData = data.filter(ele=>{
       return ele.profession!== 'admin';
  })
  console.log(newData);
}

// 4. Concatenate Array
function concatenateArray() {
  let arr = [ { name: "jon", age: 24, profession: "developer" },
  { name: "junned", age: 27, profession: "admin" },]

  let concatArray = data.concat(arr);
  console.log(concatArray);
}

// 5. Average Age
function averageAge() {
  let sum=0;
  data.map(ele=>
    {
      sum+=ele.age;
    })

    console.log(sum/data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(person => person.age > 25);
  console.log( isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
 
    let unique_values = [
        ...new Set(data.map((element) => element.profession)),
    ];

console.log(unique_values)
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => {
    return a.age - b.age;
});
console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
 let dataD = data.map(ele=>{
    if(ele.name=='john'){
      ele.profession='admin'
    }

    console.log(data);
  }
    )
}

function getTotalProfessions() {
  const professionCounts = data.reduce((countObj, person) => {
    const { profession } = person;
    countObj[profession] = (countObj[profession] || 0) + 1;
    return countObj;
  }, {});

  console.log('Profession Count:', professionCounts);
}