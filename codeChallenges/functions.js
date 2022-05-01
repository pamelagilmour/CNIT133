

// Loop and map this new array. For each value in this new array check if the current value is evenly divisible by another number 'k'.

// The output should be an array of True/False values the same size as the created array [(n to 100) % m]


function print1to100(n, m, k) {
	let arr = [];

	for (i = n; i < 101; i++) {
		if (i % m === 0 && i % k === 0) {

			console.log(i);
			arr.push('true');
		} else if (i % m === 0 && i % k !== 0) {

            console.log('false');
		    arr.push('false');


        }
	}

    document.getElementById('print1-100').innerHTML += '<p>' + arr + '</p>';
}




// Bonus round...create an array with the values [(n to 100) % m]

// function print1to100(n, m) {
// 	let arr = [];

// 	for (i = n; i < 101; i++) {
// 		if (i % m === 0) {
// 			console.log(i);
// 			arr.push(i);
// 		}
// 	}

//     document.getElementById('print1-100').innerHTML += '<p>' + arr + '</p>';
// }

// Modify the function to print numbers evenly divisible by another number 'm'...print blah blah

// function print1to100(m) {
// 	for (i = 0; i < 101; i++) {
// 		if (i % m === 0) {
// 			console.log(i);
// 			document.getElementById('print1-100').innerHTML += '<p>' + i + '</p>';
// 		}
// 	}
// }

// Modify the function to print numbers evenly divisible by 3...print blah blah

// function print1to100() {

// 	for (i = 0; i < 101; i++) {

//         if (i % 3 === 0) {

// 			console.log(i);
//             document.getElementById('print1-100').innerHTML += '<p>' + i + '</p>';

// 		}

// 	}
// }

// Modify the function to take a number 'n' and then print the numbers from n to 100

// function print1to100 (n) {

//     for ( i = n; n < 101; n++ ) {

//         // console.log(n);

//         document.getElementById("print1-100").innerHTML += "<p>" + n + "</p>";

//     }

// }

// Write a function that prints the numbers from 0 to 100

// function print1to100() {
// 	for (i = 0; i < 101; i++) {
// 		// console.log(i);

// 		document.getElementById('print1-100').innerHTML += '<p>' + i + '</p>';
// 	}
// }
