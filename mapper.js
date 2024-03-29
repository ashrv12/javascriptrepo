// Some data we can work with
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

function yr15(result) {
    if (result.year < 1600 && result.year > 1499) {
        return true;
    } else {
        return false;
    }
}

const fifteenth = inventors.filter(yr15)

console.log(fifteenth)


// Array.map()
// 2. Give us an array of the inventors first and last names

function names(result) {
    const first = result.first;
    const second = result.last;
    return {
        first: first,
        last: second
    }
}

const onlyNames = inventors.map(names)
console.log(onlyNames)

// Array.sort()
// 3. Sort the inventors by birthdate, oldest to youngest


function birth(x) {
    return x;
}

const birthArray = inventors.map(birth)
console.log(birthArray)

birthArray.sort((a, b) => {
    return a.year - b.year;
});

// 4. Sort the inventors by years lived

const livedArray = inventors.map(birth)

livedArray.sort((a, b) => {
    return ((b.passed - b.year) - (a.passed - a.year))
})

console.log(livedArray)


// 5. Sort by age from longest life span to shortest life span. Show the age.

const withAge = inventors.map(birth)

withAge.sort((a, b) => {
    a.age = a.passed - a.year;
    b.age = b.passed - b.year;
    return b.age - a.age;
})

console.log(withAge)