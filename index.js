// Code your solutions in this file
function writeCards(name, events) {
    let names = ['Guadalupe', 'Ollie', 'Aki'];
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}

const messages = writeCards(); 
console.log(messages); 
function countDown(number) {
    
    if (number < 0) {
      console.log(10);
      return;
    }
    
    
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  

   