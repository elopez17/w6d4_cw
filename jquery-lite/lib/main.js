const DOMNodeCollection = require('./dom_node_collection');

window.$l = function(arg) {
  this.callbacks = this.callbacks || [];
  
  if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
    
  } else if (arg instanceof Function) {
    this.callbacks.push(arg);
    
    if (document.readyState === 'complete') {
      this.callbacks.forEach (
        callback => callback()
      );
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        this.callbacks.forEach (
          callback => callback()
        );
      });
    }
    
  } else {
    const els = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(els));
  }
};

$l.extend = function(...args){
  return Object.assign({}, ...args);
};

$l.ajax = function(options){
  let df = {success: (res) => window.location = JSON.parse(res).data.image_url ,
            error: () => console.log('error'),
            url: `https://api.giphy.com/v1/gifs/random?api_key=9IfxO6R6fpEZMAdqdw66QUgQdPejVIAW&rating=G`,
            data: {}, 
            method: "GET", 
            contentType: "JSON" };
            
  options = Object.assign({}, df, options);
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        options.success(xhr.response);
      } else {
        options.error(xhr.response);
      }
    }
  };
  
  xhr.open(options.method, options.url);
  xhr.send(options.data);  
};
















