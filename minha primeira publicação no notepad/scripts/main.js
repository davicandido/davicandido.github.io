let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bituca-quarto.jpg') {
      myImage.setAttribute('src','images/bituca-2.jpg');
    } else {
      myImage.setAttribute('src','images/bituca-quarto.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Qualé teu nome?.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
  myHeading.textContent = 'Aprendendo HTML & CSS para largar as redes sociais em 2021, ' + myName;
}
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Aprendendo HTML & CSS para largar as redes sociais em 2021, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}