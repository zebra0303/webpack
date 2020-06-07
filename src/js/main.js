import printMe from "./print.js";

console.log('main');


import(/* webpackChunkName: 'common' */ './common.js')
.then(({default: comm})=>comm());

function getComponent() {
    return import(/* webpackChunkName: 'lodash' */ 'lodash')
    .then(({default: _ }) => {
      const elem = document.createElement('div');
      const btn = document.createElement("button");

      btn.innerHTML = "Click me and check the console!!";
      btn.onclick = printMe;

      elem.innerHTML = _.join(["Hello", "Main"], " ");
      elem.appendChild(btn);

      return elem;
    })
    .catch(err => 'An error occurred');
}

//document.body.appendChild(component());

getComponent().then(component => {
  document.body.appendChild(component);
});