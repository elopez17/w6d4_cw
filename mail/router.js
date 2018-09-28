class Router {
  constructor(node) {
    this.node = node;  
    this.render = this.render.bind(this);
  }

  start(){
    window.addEventListener('hashchange', this.render);
    // document.addEventListener('hashchange', ()=> console.log('re-render')));
    // window.onhashchange = e => this.render();
    // window.onhashchange = this.render.bind(this);
  }

  render(){
    // debugger;
    this.node.innerHTML = "";
    let route = this.activeRoute();
    let newTag = document.createElement('p');
    newTag.innerHTML = route;
    this.node.appendChild(newTag);
  }

  activeRoute(){
    return window.location.hash.slice(1);
  }

}

module.exports = Router;
// function Router(node){
//   this.node = node;
// }
// 
// Router.prototype.start = function(){
//   window.onhashchange = this.render;
// };
// 
// Router.prototype.render = function(){
//     this.node.innerHTML = "";
//     let route = this.activeRoute();
//     let newTag = document.createElement('p');
//     newTag.innerHTML = route;
//     this.node.appendChild(newTag);
// };
// 
// Router.prototype.activeRoute = function(){
//   return window.location.hash.slice(1);
// };

