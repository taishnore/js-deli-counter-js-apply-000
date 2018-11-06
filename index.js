//it helps to think about this first function as a real scenario. Anybody who takes a number is automatically at the end of the line. ALL I have to do is add their name to the line array, and then I have to tell them what their place is in line. since they're always going to be last in line, all I have to do is use the length of the line. 
//One test was "the function properly handles adding multiple people," but the argument "name" can only be one at a time, no?
//figured it out -- what that test means is: multiple arguments can be passed through the 'name' parameter, and that name will always be added to the end of the array (hence array.push(name)). Basically it's testing to see whether I properly add people to the array - that they are always at the end.

var number = 0

function takeANumber(line) {
  number++
  line.push(number)
  return `Hi, you are number ${number} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  let current = [];
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++) {
      current.push(` ${i + 1}. ${line[i]}`);
    }
  } return `The line is currently:${current.join()}`;
}
