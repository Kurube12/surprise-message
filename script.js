let yesSize = 16;
const MAX_SIZE = 5000;
const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
let clickCount = 0;


const message = [
    "wanna be with me?",
    "are you sure?🥺",
    "Like really really sure?😢",
    "really really really sure?😭",
    "We could be so good together🥹",
    "I'll make you smile everyday(platonically)👀",
    "please pretty, please?🥺",
    "We could (platonically) cuddle😔",
    "We could watch movies together(platonically)😟",
    "Last chance to say yes!😩"

];

const gifMessages = [
    "gif/gif2.gif",
    "gif/gif3.gif",
    "gif/gif4.gif",
    "gif/gif5.gif",
    "gif/gif6.gif",
    "gif/gif7.gif",
    "gif/gif8.gif",
    "gif/gif9.gif",
    "gif/gif10.gif",
    "gif/gif11.gif"
    

]

let messageIndex = 0;

function buttonClick(event) {
    const buttonId = event.target.id;   
    if (buttonId === 'yes') {
     document.querySelector('h1').innerText = "Yay! Happy Valentine's Day! ❤️";
     document.querySelector('.cat-image').src = 'gif/yay.gif';
     yesBtn.style.display = 'none';
     noBtn.style.display = 'none';
    }   

    
     if (buttonId === 'no') {
        yesSize = Math.min(yesSize * 1.5, MAX_SIZE);
         yesBtn.style.fontSize = yesSize + 'px';
         yesBtn.style.padding = yesSize / 2 + 'px ' + yesSize + 'px'; 
      messageIndex++;
         document.querySelector('h1').innerText = message[messageIndex];
         clickCount++;
         document.querySelector('.cat-image').src = gifMessages[messageIndex];

         if (yesSize >= 500) {
    document.querySelector('h1').style.display = 'none';
    document.querySelector('.cat-image').style.display = 'none';
}
     }  

if (clickCount >= 2 ) {
    noBtn.style.position = 'absolute';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + 'px';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + 'px';

}

if (yesSize >= 500) { // adjust threshold as needed
    yesBtn.style.position = 'fixed';
    yesBtn.style.left = '50%';
    yesBtn.style.top = '50%';
    yesBtn.style.transform = 'translate(-50%, -50%)';
    yesBtn.style.zIndex = '9999';
    yesBtn.style.width = '100vw';
    yesBtn.style.height = '100vh';
    yesBtn.style.borderRadius = '0';
}

    }


yesBtn.addEventListener('click', buttonClick);
document.getElementById('no').addEventListener('click', buttonClick);   
