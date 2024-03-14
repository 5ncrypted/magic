alertA.js text/javascript
(function(){window.onload = function(){alert('test');}})();

alertB.js text/javascript
(function(){alert('test2');})();

dataTestA.js text/javascript
(function(){window.onload = function(){document.open('text/html');document.write('<div style="width: 100%; text-align: center; font-size: 30px">yea I made a thing and guess what? it can modify web pages</div>');document.close();}})();
