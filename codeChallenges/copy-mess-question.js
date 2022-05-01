let someDoDad = ['green', 'red', 'baz'];
let someOddThing = ['one', 'two', 'baz'];
let someOtherThing = { type: '123abc' };

const strangeFunc = () => {
	someOtherThing && (
        someDoDad.includes('foo')? console.log('hello')
        : someDoDad.includes('bar')? console.log('world')
        : someDoDad.includes('baz')? console.log('alice')
        : someOtherThing.type == '123abc'? console.log('bob')
        : someOddThing.includes('foo') || someOddThing.includes('bar') || someOddThing.includes('baz')? console.log('carol')
        : console.log("This isn't working"));
};

const updatedStrangeFunc = () => {

    if (someDoDad.includes('foo')) {

        console.log('hello');

    } else if (someDoDad.includes('bar')) {

        console.log('world');

    }

    // someOtherThing && ();
        // if ( someDoDad.includes('foo') ) {
            // console.log('hello');
        // } else {


        // }
    

}

// strangeFunc();

// What will this function output? //nothing d/t line7
// Technically, it works...but what's wrong with it?
// Can you rewrite this without ternaries?
