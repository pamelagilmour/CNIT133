let thing1 = [
	{
		id: 123,
		type: 'foo',
		color: 0xffffff,
		count: 45,
	},
	{
		id: '234',
		type: 'bar',
		color: 'red',
		count: '75',
	},
	{
		id: '123cfe',
		type: 'baz',
		color: 'blue',
		count: 123,
	},
];

// Loop array 'thing1' and output the fields in a table form

let topRow = Object.keys(thing1[0]);
let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];


for (i = 0; i < thing1.length; i++) {
	row1.push(thing1[i].id);
	row2.push(thing1[i].type);
	row3.push(thing1[i].color);
	row4.push(thing1[i].count);


}
	console.log(topRow);
	console.log(row1);
	console.log(row2);
	console.log(row3);
	console.log(row4);

// let rowStr = '';
// const ids = thing1.map(ofThing1 => { })

// for (let index in thing1) {
// 	thing1.map(ofThing1 => {
// 	return ofThing.type
// 	})
// }


// Sum the field 'count' and output the value

let sum = 0;

for (i = 0; i < thing1.length; i++) {
	sum += parseInt(thing1[i].count);

	// console.log(thing1[i]);
}

console.log(sum);


// Add a row at the beginning of the output with the field names

for ( let property in thing1) {
	// if (Object.getOwnPropertyNames(thing1)) {
		// let value = thing1[property];
		// console.log(Object.keys(thing1[0]));
	// }
	Object.keys(thing1[0]);
}