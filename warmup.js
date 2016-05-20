var objCar = {
	maker: "Audi",
	model: "s5",
	color: "black",
	doors: 2 
}


var objPet = {
	type: "Dog",
	breed: "German Shepherd",
	age: 7,
	weight: 90
}



function squareNumericValues(obj) {

	for(var key in obj) {
		if( typeof(obj[key]) === "number" ) {
			obj[key] = obj[key] * obj[key];
		}
	}

	return obj;
}