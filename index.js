// it('adds a person to the line', () => {
      //expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, //Ada. You are number 1 in line.");
     // expect(katzDeli).toEqual(['Ada']);
   // });

let katzDeli = []; 

function takeANumber (katzDeli, name) {
  katzDeli.push(name); 
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`;
}

function currentLine (katzDeli) {
  if (katzDeli == []) {
    return "The line is currently empty."
  }
  let line = "";
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(((indexOf(i)) + 1) + `.${i},`); 
  }
  return `The line is currently: ${line}`; 
}

function nowServing (katzDeli) {
  if (katzDeli == []) {
    return "The line is currently empty."; 
  } else {
  return `Currently serving ${line[0]}.`; 
}
}