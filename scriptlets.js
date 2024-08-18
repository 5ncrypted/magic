alertA.js text/javascript
(function(){window.onload = function(){alert('test');}})();

alertB.js text/javascript
(function(){alert('test2');})();

dataTestA.js text/javascript
(function(){window.onload = function(){document.open('text/html');document.write('<div style="width: 100%; text-align: center; font-size: 30px">yea I made a thing and guess what? it can modify web pages</div>');document.close();}})();

dataTestB.js text/javascript
(function(){document.open('text/html');document.write('<div style="width: 100%; text-align: center; font-size: 30px">yea I made a thing and guess what? it can modify web pages</div>');document.close();})();

beckyBreaker.js text/javascript
(function(){
    window.onload = function () {
  var date = new Date();
  var dow = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();

  if ((dow != 0) && (dow != 6) && (hour == 12) && (minute < 30)) {
    document.open;
    document.write('<!DOCTYPE html><html><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap" rel="stylesheet"><style> * { margin: auto; font-family: Times New Roman; font-family: "Baskervville", serif; color: white; font-weight: 400; font-style: normal; text-align: center} html { background: #C00 } body {width: 100%; margin: auto} .triangle { width: 300px; height: 260px; background-image: linear-gradient(to bottom right, transparent 50%, white 0), linear-gradient(to top right, white 50%, transparent 0); background-size: 50% 100%; background-repeat: no-repeat; background-position: left, right; margin-bottom: 20px; line-height: 300px; font-size: 150px; color: #C00} .container {padding-top: 70px} .scaryhighlight {color: #C00; background: white; width: 35px; transition: 1s} .scaryhighlight:hover {color: white; background: #C00; font-size: 100px} .msg1 {} a {background: #C00; color: white; transition: 1s} a:hover {background: white; color: #C00; font-size: 150px} .msg {font-size: 20px; background: #C00; color: white; transition: 1s} .msg:hover {background: white; color: #C00}</style><body><div class="container"><div class="triangle">!</div><span class="msg">Your Chromebook has contracted a <span class="scaryhighlight">virus</span></span><div class="msg">All money to give to <a href="https://www.army.mil">bux.gg</a> to return operate of chromebook</div><div class="msg">1000000 bitcoin plz</div></div></body></html>');
    document.close;
    }
  }
})();

basicUnhide.js text/javascript
(function(){null})();

eToA.js text/javascript
(function(){
    window.onload = function(){
        const elements = document.body.querySelectorAll('*');
        elements.forEach(element => {
            if (element.nodeType === Node.TEXT_NODE) {
                const newText = element.textContent.replace(/e/g, 'a');
                const newTextNode = document.createTextNode(newText);
                element.parentNode.replaceChild(newTextNode, element);
            }
        });
    }
})();

unlockSwitch.js text/javascript
(function(){
    window.onload = function(){
        var unlockSwitch = false;
        document.addEventListener('keydown', (event) => {
            if (event.altKey && event.key === 'q') {
                if (unlockSwitch) {
                    document.body.contentEditable='false';
                    document.designMode='off';
                } else {
                    document.body.contentEditable='true'; document.designMode='on';
                }
            unlockSwitch = !unlockSwitch
            }
        });
    }
})();
