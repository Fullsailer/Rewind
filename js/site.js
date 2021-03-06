// Get the string from the page
//Controller function
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//logic function
function reverseString(userString) {

    let revString = [];

    //How array works
    //let name= Hello
    //name[0] = "H"
    //name[4] = "o"
    //last pos in an array name.lenght -1

    //reverse a string using a for loop
    for (let index = userString.length - 1 ; index >= 0; index--) {
        revString += userString[index];

    }

    return revString;
}

//Display the reversed string to the user.
//View Function
function displayString(revstring) {

    //Write to the page
    //Concatination of strings
    //document.getElementById("msg").innerHTML = "Your string reversed is: " + revString;
    // Option 2
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}