// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"].Declare another variable and assign the second item of the array as a value.
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const second = ["london"];
console.log("task 1", euroCities);


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
console.log("task no 6 ", experiment);
console.log(euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["Kabul", "Tehran", "Lahore", "Tashikand", "Herat"]
console.log("task 7", asianCities);

// 8. ** Bonus **: Use an array method to select items 2 - 4 from the array of asianCities and store this in another variable.  


// 9. ** Bonus **: Use a method to concat euroCities with asianCities.Store the result in a variable(eg.worldCities).  
console.log(euroCities.concat(asianCities));

// const citiesOne = ["Paris", "London", "Valletta", "Prague", "Rome"];
// const citiesTwo = ["Kabul", "Tehran", "Lahore", "Tashikand", "Herat"]
// console.log(citiesOne + citiesTwo);

// 10. Reverse the order of worldCities.

// 11. ** Bonus **: Replace the 3rd item in the array of worldCities with "Toronto". 

// 12. ** Bonus **: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
