// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. 


// For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.




var stringParser = function( str){
	var arr = str.split(' ');
	return arr
};

var repeatCounter = function(word){
	var arr = word.split('');
	var mostRepeats = 0;

	var letters = [];

	for (var i = 0; i < arr.length; i++) {

		var alreadyIn = false;
		for (var j = 0; j < letters.length; j++) {
			if (letters[j] === arr[i]) {alreadyIn = true};
		};

		if (!alreadyIn){
			letters.push(arr[i]);
		};
	};

	for (var i = 0; i < letters.length; i++) {
		var thisCounter = 0;
		
		for (var j = 0; j < arr.length; j++) {
			if (letters[i]==arr[j]) {

				thisCounter+=1;
			};
		};

		if (thisCounter > mostRepeats) {
			mostRepeats = thisCounter;
		};
	};
	if (mostRepeats === 1) {mostRepeats = 0};
	return mostRepeats;
}

function LetterCountI (str){

	var derpArray = str.split(' ');
	var firstDerp = derpArray[0];

	str = str.toLowerCase();

	var ary = stringParser(str);

	




	var champWord = {
		word: "",
		repeats: 0
	};

	
	for (var i = 0; i < ary.length; i++) {
		var thisRepCount = repeatCounter(ary[i]);
		if (thisRepCount > champWord.repeats) {
			champWord.repeats = thisRepCount;
			champWord.word = ary[i];
		};
	};
	if (champWord.word === ary[0]) {
		champWord.word = firstDerp;
	};

	if (champWord.repeats === 0) {return -1};
	return champWord.word;
};







	describe("take the str parameter being passed and return the first word with the greatest number of repeated letters", function() {
	

	it("should behave...", function() {
		
		expect( LetterCountI( "Today, is the greatest day ever!"  )). toEqual( "greatest");
		expect( LetterCountI( " it is hot today"  )  ).toEqual(  -1 );

	});

	describe("stringParser", function() {
		it("should break a string into an array of words", function() {

			expect(    stringParser("blah blah blabbity blah")).toEqual(["blah", "blah", "blabbity", "blah"]);

			expect(stringParser("something else")).toEqual(["something", "else"]);

		});
		
	});

	describe("repeatCounter", function() {
		it("should return the number of repeats by the most repeated letter in a word", function() {

			expect(repeatCounter( "bubble")   ).toEqual(3   )
			expect(repeatCounter( "fish")   ).toEqual(0 )
			expect(repeatCounter( "mississippi")   ).toEqual(  4 )
			
		});
	});

});