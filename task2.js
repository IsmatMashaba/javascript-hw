let string = "Javascript";
//Rotate the String n Times in the Left Direction
// expected outcome: vascriptja

const leftRotateString = (expectedString, n) => {
  let result = expectedString.substr(n,expectedString.length) + expectedString.substr(0,n);
    console.log(result)
}

leftRotateString(string,2)
