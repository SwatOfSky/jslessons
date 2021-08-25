function firstTask() {
let ecma = prompt("official name of Javascript?");
if (ecma == 'EcmaScript'){
	alert("Correct!");
} else {
	alert("Don't you know EcmaScript?");
}
}

//let current = prompt('current year?', 2021);
//let age = prompt('how old are you?', 100);
//const res = current - age;
//alert(res);

function secondTask() {
	let secondTask = prompt("enter any number");
	if (secondTask <0){
		alert('-1');
	} else if (secondTask ==0){
		alert('0');
	} else if (secondTask >0){
		alert('1');
	}
}


function thirdTask() {
	let thirdTask = prompt("Who is there?");
if (thirdTask == "Admin"){
		let Admin = prompt("Password?");
		if (Admin == "Black Master"){
			alert("Welcome!");
		} else if(Admin === null){
			alert("Entrance cancelled");
		} else {
			alert("Incorrect Password")
		}
	} else if (thirdTask === null){
		alert("Entrance cancelled");
	} else {
		alert ("I do not know you!");
	}
}


function taskFour() {
	let i = 0;
	while (i < 3) {
		alert("number"+i+"!");
		console.log(i);
		i++;
	}
}

function taskFive() {
	let sum = 0;
	while (true) {
		const value = prompt('Enter the number higher than 100');
		if (value == null){
			break
		} else if (value > 100){
		break	
		}
	}
	alert("Thanks!");
}




