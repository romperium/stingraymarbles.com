const textSelect= [
  'hop on terraria majd',
  'i said maybe',
  'check out the repo at github.com/romperium',
  'yo does this work?',
];
 
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * textSelect.length);
    return textSelect[randomIndex];
  }
 
function loadText() {
  const myDiv = document.getElementById('div_text');
  myDiv.innerHTML= getRandomText();
}
 
window.onload = loadText;
