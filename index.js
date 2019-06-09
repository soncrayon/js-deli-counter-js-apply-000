// it('adds a person to the line', () => {
      //expect(takeANumber(katzDeli, 'Ada')).toEqual("Welcome, //Ada. You are number 1 in line.");
     // expect(katzDeli).toEqual(['Ada']);
   // });

let katzDeli = []; 

function takeANumber (katzDeli, name) {
  katzDeli.push(name); 
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`;
}