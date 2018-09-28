const Router = require('./router.js');

document.addEventListener('DOMContentLoaded', function(e){
  let buttons = document.querySelectorAll('.sidebar-nav li');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      let str = btn.innerText.toLowerCase();
      window.location.hash = str;
      console.log(str);
    });
  });
  // debugger;
  let DOMNode = document.querySelector('.content');
  let router = new Router(DOMNode);
  router.start();
  
});