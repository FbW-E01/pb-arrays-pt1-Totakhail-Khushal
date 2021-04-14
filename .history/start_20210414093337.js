// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"].Declare another variable and assign the second item of the array as a value.

const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const second = ["london"];
console.log("task 1", euroCities);
console.log(second);


// 2. Change the first item in the array to "Berlin".

euroCities.unshift("Berlin");
console.log("task 2", euroCities);


// 3. Print the length of the array "euroCities".
console.log("task 3 ", euroCities.length);




// 4. Remove the last item of the array "euroCities". 
euroCities.pop();
console.log("task 4", euroCities);

// 5. Use an array method to add "Budapest" to the euroCities array. 
euroCities.splice(1, 0, "Budapest");
console.log("task 5 ", euroCities);

// 6. ** Bonus **: Remove the second and third items from the euroCities array.
console.log(euroCities);
const experiment = euroCities.splice(1, 2);
console.log("task 6 ", experiment);
console.log(euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Kabul", "Tehran", "Lahore", "Tashkent", "Singapore"]
console.log("task 7", asianCities);

// 8. ** Bonus **: Use an array method to select items 2 - 4 from the array of asianCities and store this in another variable.  
const cities = asianCities.slice(1, 4);
console.log("task 8 ", cities);


// 9. ** Bonus **: Use a method to concat euroCities with asianCities.Store the result in a variable(eg.worldCities).  
const worldCities = euroCities.concat(asianCities);
console.log("task no 9", euroCities.concat(asianCities));

// const citiesOne = ["Paris", "London", "Valletta", "Prague", "Rome"];
// const citiesTwo = ["Kabul", "Tehran", "Lahore", "Tashkent", "Herat"]
// console.log(citiesOne + citiesTwo);

// 10. Reverse the order of worldCities.
console.log("task 10", worldCities.reverse());

// 11. ** Bonus **: Replace the 3rd item in the array of worldCities with "Toronto". 
worldCities.splice(2, 1, "Toronto");
console.log("task 11", worldCities);

// cities[2] = "Toronto"
// console.log(cities);


// 12. ** Bonus **: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);


// const words = ["have", "a ", "nice", "day"] // add a new word 
// words.splice(1, 0, "AWESOME");
// console.log(words);



// 13. ** Bonus ** Write a program to join all elements of the result(worldCities) into a string.
//     Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs:
// "Berlin, London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh"
console.log(cities.join(", "));
console.log(cities.join("+ "));

//     ** Bonus **

//     1. Write a program to reverse the string: "Hello World". 

// ** Extra Practice **

//     Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.
const siblings = ["one", "two", "three"];

// 2. Make an array of your parents' names.
const parents = ["father", "mother"];
console.log("part two q 2", parents);


// 3. Combine these two arrays.
const family = parents.concat(siblings);
console.log("task part two q3", family);

// 4. Add your pets' names.
const pets = ["Moose", "Johny", "Hama"];
console.log("part two4", pets);

// 5. Reverse the order of the array.
family.sort();
console.log("part two q5", family);

// 6. Access one of your parents' names.

// 7. Update the name of one of your parents.