//===========tarea1===========
/**
 * Copy the code below into your workspace:
 * let arr = ["This", "is", "a", "sentence."];
 *function printOutString() { your code here }

    printOutString();
    Complete the function to print out the string: This is a sentence
 */
let arr = ["This", "is", "a", "sentence."];

const tarea1 = (valor) =>{
   console.log(`Tarea 1: ${valor.join(" ")}`); 
}

tarea1(arr);

//===========tare2===========


/**
 * Write a function that:
•	Takes in an array of numbers.
•	Doubles the value of each number in the array.
•	Prints out the new updated array.
 *Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */

const tarea2 = (arr) =>{
    const doubled = arr.map(num => num * 2); // Duplica cada número
    console.log(`Tarea 2: ${doubled}`); 
}

tarea2([1, 2, 4, 5]); // Salida: [2, 4, 8, 10]


//===========tare3===========


/**Write a program to compute the sum and product (multiplication) of an array of numbers. 
 * Print out the sum and the product.
 * Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

const SumAndProduct= (arr)=> {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const product = arr.reduce((acc, num) => acc * num, 1);

    console.log(`Tarea 3:`)
    console.log(`La suma es: ${sum}.`);
    console.log(`La multiplicaciones: ${product}.`);
}

const numbers = [1, 2, 3, 4];
SumAndProduct(numbers);

//===========tare4===========


/**let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

let commonCourses = student1Courses.filter(course => student2Courses.includes(course));

console.log("Tarea 4: curso en comun", commonCourses.join(", "));
