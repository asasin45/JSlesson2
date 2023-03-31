// Task 1
// create a function, that will get a number as a parameter and the square of that number 
// (4) will return 16, (10) will retun 100
// function square(value) {
//     return value * value;
// };
// console.log (square(4));
// function square(value) {
//     return value * value;
// };
// console.log (square(10));
// Task 2
 persons = [
    {
      id: 325326,
      firstname: "Dan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.1990",
      gender: "Male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325326,
      firstname: "Fan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.2005",
      gender: "Male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325330,
      firstname: "Frank",
      lastname: "Lion",
      image: "url",
      birthday: "10.05.1991",
      gender: "male",
      hobbie: ["walking", "basketball"],
      nationality: "syria",
      friends: ["", "", ""],
      residence: 10041
    },
    {
      id: 325334,
      firstname: "Bilal",
      lastname: "Zakki",
      image: "url",
      birthday: "08.19.1999",
      gender: "male",
      hobbie: ["swimming", "walking"],
      nationality: "canada",
      friends: [325330, 325326],
      residence: 10012
    }
  ];
//   let value = 'I have just met a person whose name is ';
// //   console.log(persons[0].firstname);
//   // create a function that will get any of the items from persons array as a parameter and return the 
//   // following string 'I have just met a person whose name is <firstname> + <lastname>';

// // let valod = persons[1].firstname;
// // let vivaro = persons[1].lastname;

//   function friends() { 
//     return value + persons[1].lastname + ' ' + persons[1].firstname;
//   };
  
//   console.log (friends());

let value1 = 'My friend ';
let value2 = 'is from '; 

function profession(lastname,firstname,nationality) {
    return value1 + lastname + ' ' + firstname + ' ' + value2 + nationality;
};
console.log(profession(persons[2].lastname, persons[2].firstname, persons[2].nationality));