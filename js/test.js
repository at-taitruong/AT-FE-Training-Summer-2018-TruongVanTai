// 1
var test1 = function(a,b) {
	if (a === b) {
		return (a + b)*3
	} else a + b;
}

// 2
var test2 = function(a) {
	if (a >= 19) {
		return (a - 19)* 3;	
	} else return 19 - a;
}

// 3
var test3 = function(a) {
	var indexAsterisk = a.indexOf("*");
	var subA = a.slice(0,indexAsterisk);
	var subB = a.slice(indexAsterisk+1,a.length);
	var newArray = [];
	for (var i = 0; i < 10; i++) {
		var number = parseInt(subA+i+subB);
		if (number % 3 == 0 ) {
			newArray.push(number);
		} 
	}
	console.log(newArray);
}

// 4
var test4 = function(a) {
	var indexAsterisk = a.indexOf("*");
	var subA = a.slice(0,indexAsterisk);
	var subB = a.slice(indexAsterisk+1,a.length);
	var newArray = [];
	for (var i = 0; i < 10; i++) {
		var number = parseInt(subA+i+subB);
		if (number % 6 == 0 ) {
			newArray.push(number);
		} 
	}
	console.log(newArray);
}