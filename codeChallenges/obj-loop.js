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

// const ids = thing1.map(ofThing => {
// 	// return ofThing.id + ofThing.type + ;
// })

// console.log(ids);

// for (let index in thing1) {
// 	thing1.map(ofThing => {
// 	return ofThing.type;
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