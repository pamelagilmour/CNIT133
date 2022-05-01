let someDoDad = ['green', 'red', 'baz'];
let someOddThing = ['one', 'two', 'baz'];
let someOtherThing = { type: '123abc' };

const strangeFunc = () => {
	someOtherThing &&
		(someDoDad.includes('foo')
			? console.log('hello')
			: someDoDad.includes('bar')
			? console.log('world')
			: someDoDad.includes('baz')
			? console.log('alice')
			: someOtherThing.type == '123abc'
			? console.log('bob')
			: someOddThing.includes('foo') ||
			  someOddThing.includes('bar') ||
			  someOddThing.includes('baz')
			? console.log('carol')
			: console.log("This isn't working"));
};

strangeFunc();

// What will this funciton output?
// Technically, it works...but what's wrong with it?
// Can you rewrite this without ternaries?
