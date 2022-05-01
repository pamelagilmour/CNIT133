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
// Sum the field 'count' and output the value
// Add a row at the beginning of the output with the field names
function hello () {


    document.getElementById('hello').innerHTML += "<td>'Hello'</td>";


}

function loopObj () {

    for (let property in thing1) {

			// console.log(`<td>${thing1[property].id}: ${thing1[property].color}</td>`);

			document.getElementById('hello').innerHTML += `<td>${thing1[property].id}: ${thing1[property].color}</td>`;

		}

}

