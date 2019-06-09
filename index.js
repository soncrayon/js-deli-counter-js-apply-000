let katzDeli = []; 

function takeANumber (katzDeli, name) {
  katzDeli.push(name); 
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`;
}

function currentLine (katzDeli) {
  if (katzDeli == []) {
    return "The line is currently empty.";
  } else{
  let line = "";
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(((katzDeli.indexOf(i)) + 1) + `.${i},`); 
  }
  return `The line is currently: ${line}`; 
}
}

function nowServing (katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"; 
  } else {
  return `Currently serving ${katzDeli[0]}.`; 
}
}