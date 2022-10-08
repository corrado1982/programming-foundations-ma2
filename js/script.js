//Question 1

var pets = [
    {
      type: "cat",
      age: 5.5,
    },
    {
      type: "dog",
      age: 3.8,
    },
    {
      type: "parrot",
      age: 4.0,
    },
  ];

  for (var i = 0; i < pets.length; i++) {
    if (pets[i].age >= 4) { 
        console.log(pets[i].type)
    }
  }

  //Question 2

function booleanChecker (booleanValue) {
    var typeOfBoolean = typeof booleanValue;

if (typeOfBoolean !== "boolean") {
    return "Please pass a boolean value in" ;
} 
    
return booleanValue

}
resault = booleanChecker(true);
console.log(resault);

//or

/*function booleanChecker (booleanValue) {
    var typeOfBoolean = typeof booleanValue;

if (typeOfBoolean !== "boolean") {
    console.log( "Please pass a boolean value in") ;
} else {
    
console.log(booleanValue) ;
}
}
booleanChecker(9);*/

//Question 3

var button = document.querySelector ("button");
var changeColor = document.querySelector ("h2");
var changeText = document.querySelector ("h2");


button.onclick = function updateH2 () {

    changeColor.style.color = "blue";
    changeText.innerHTML = "Updated subheading";
}



