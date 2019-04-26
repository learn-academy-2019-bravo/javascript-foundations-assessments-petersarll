// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number
//and decides if that number is evenly divisble by three or not.
//If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
var divBy3 = (num) => {
    if (num % 3 === 0){
        console.log('is divisible by 3');
} else {
    console.log('is not divisible by 3');
    }
}
divBy3(8)


// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
var helloMe  = {
    first_name: 'Peter',
    last_name: 'Sarll',
    cats_names: 'Kody and Ubie',
    age: 27,
    getInfo() {
         return "my name is" +" " + this.first_name +" "+ this.last_name +". My cats' names are "+ this.cats_names +". I am "+ this.age +"."
     }
    }

console.log(helloMe.getInfo())

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
var groceryItems = ['apple', 'oranges', 'celery', 'coffee', 'bread']

returnFirstmidLast = (array) => {
    console.log(array[0], array[2], array[4])
}

returnFirstmidLast(groceryItems)

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
var word = 'learn'
var newArr = word.split('')
alphabetSoup = (newArr) => {
    newArr.sort()
    return newArr.join('')
}


console.log(alphabetSoup(newArr));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
//
// var nums = [9, 5, 88, 2, 5, 42, 57]
//
// var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]


//creata function called animalNums
//create a for loop that prints one value from each array concatenated together
function animalNums() {
  var nums = [9, 5, 88, 2, 5, 42, 57]
  var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
  var newArr = ""
  for (var i = 0; i < nums.length; i++) {
     newArr += nums[i] + " " + nouns[i] + ", "
  }
  return newArr;
}

console.log(animalNums());
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
var fiveNumbers = [1, 2 ,3 ,4 ,5]

mult5 = (array) => {
    let newArr = array.map(value => value*5)
    return newArr
}
console.log(mult5(fiveNumbers));
