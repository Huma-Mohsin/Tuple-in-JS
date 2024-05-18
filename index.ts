// TUPLE......tuple is a data structure that is used to organize data .
// A tuple is a collection of values that can be of different data types, stored in a single entity.
// tuple is typed array , having a predefined length.
// In tuple, elements are placed regarding to their data type at different indexes.
// we cannot exceed elements or miss element if the length in a tuple is determined however we can apply array's method  to modify it.
// we can put multiple data type in a tuple to organize a data of particular entity.
// example:-
//keeping student information in a record.
let student: [
  string,
  number,
  string,
  string,
  string,
  string,
  string,
  string,
  number,
  boolean
] = [
  "Huma Mohsin",
  26544578,
  "Karachi",
  "Governor House Karachi",
  "Main",
  "Friday-07:00 PM to 10:00 PM ",
  "Batch-1",
  "huma@abc.com",
  3425469317,
  true,
];

console.log(`Student Information : ${student}`);

//Accessing properties in a tuple:-
//we can access data in a tuple by using  calling index just like an array.

console.log("value at index 2:", student[2]); //shows karachi
console.log("value at index 4:", student[4]); //shows main
console.log("value at index 7:", student[7]); //shows email.

//just like an array , we can apply here all properties of an array.
student.push("female");
console.log("push info:", student);
student.pop();
console.log("pop info:", student);
student.shift();
console.log("shift info:", student);
student.unshift("Huma-Mohsin");
console.log("unshift info:", student);
student.slice(2, 5);
console.log("slice info:", student);
//Tuple did not make a slice?
//Tuples are immutable, meaning their contents cannot be modified once created. One of the implications of this immutability is that tuples do not have a slice method like arrays do.

// In JavaScript, when you try to use the slice method on a tuple-like array (like the student array in your example), it will actually return a new array with the sliced elements, rather than modifying the original tuple-like array.

// This is because tuples are not arrays, and they don't have the same methods and behaviors as arrays. you can't use array methods like slice on a tuple.

student.splice(2, 0, "Quarter-1");
console.log("splice info:", student); //it works by add data.
student.splice(2, 4, "Quarter-1"); //it works by deleting data and add new one.
console.log("deleted data , splice info:", student);

// In JavaScript, the splice method can indeed be used on a tuple-like array, and it will modify the original array.

// The splice method is a mutator method, meaning it modifies the original array, and it works on tuple-like arrays because they are still arrays under the hood.

// So, in JavaScript, you can use splice to add, remove, or replace elements in a tuple-like array, and it will modify the original array.

// over all.....
// Q: why push pop shift unshift works on tuple?

// The interesting part is that I am using array methods like push, pop, shift, unshift, slice, and splice on this tuple-like array. This works because, under the hood, JavaScript is still treating this as an array, and these methods are defined for arrays.

// So, in essence, I am leveraging the flexibility of JavaScript arrays to create a data structure that resembles a tuple, while still being able to use array methods to manipulate it.

// Keep in mind that it is not a traditional tuple data structure, as it's still an array and can be modified. If we need immutability, we might consider, using alternative data structures or libraries that provide immutable tuple-like structures.

//Author Huma Mohsin
