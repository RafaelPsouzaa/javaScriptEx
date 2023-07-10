const button = document.querySelector('#button');
const resultText = document.querySelector('#result');

 
function isPalindrome(text){
  const changeText = text.split('').reverse().join('');
  console.log(text);
   return text === changeText ? true : false;
  
}

button.addEventListener('click',() =>{
  const textValue = document.querySelector('#text').value;
  const result = isPalindrome(textValue);
  result?resultText.innerHTML = 'O texto e Palindro':resultText.innerHTML = 'o texto não é um palindro';
})


