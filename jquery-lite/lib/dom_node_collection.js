class DOMNodeCollection {
  constructor(els) {
    this.els = els;
  }
  
  html(str){
    if (str === undefined) {
      return this.els[0].innerHTML;
    } else {
      this.els.forEach(function(el){
        el.innerHTML = str;
      });
    }
  }
  
  empty(){
    this.els.forEach((el) => el.innerHTML = "");
  }
  
  append(args){
    this.els.forEach (
      el => {
        if (args instanceof HTMLElement || args instanceof String) {
           el.innerHTML += ( args instanceof HTMLElement ? args.outerHTML : args ); 
        } else {
          args.forEach (
            (arg) => {
              el.innerHTML += arg.outerHTML;
            }
          );
        }
      }
    );
  }
  
  attr(name, val) {
    if (val === undefined) {
      return this.els[0].getAttribute(name);
    } else {
      this.els.forEach((el) => { el.setAttribute(name, val); });
    }
  }
  
  addClass(names) {
    const classNames = names.split(" ");
    this.els.forEach((el) => { el.classList.add(...classNames); });
  }
  
  removeClass(names) {
    const classNames = names.split(" ");
    this.els.forEach((el) => { el.classList.remove(...classNames); });
  }
  
  children(){
    let children = [];
    
    this.els.forEach((el) => { 
      let c = Array.from(el.children);
      children = children.concat(c);
    });
    return new DOMNodeCollection(children);
  }
  
  parent(){
    let parents = [];
    
    this.els.forEach((el) => { 
      let c = Array.from(el.parentNode);
      parents = parents.concat(c);
    });
    return new DOMNodeCollection(parents);
  }
  
  find(str){
    let result = [];
    
    this.els.forEach((el) => {
      let temp = el.querySelectorAll(str);
      result = result.concat(temp);
    });
    return new DOMNodeCollection(result);
  }
  
  remove(){
    this.els.forEach((el) => {
      el.remove();
    });
    this.els = [];
  }
  
    
}

module.exports = DOMNodeCollection;
