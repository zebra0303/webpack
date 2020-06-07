//import '../css/list/list.scss';
import printMe from "../print.js";

console.log('list')

async function getComponent() {
  const { default : _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash');

  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "List"], " ");

  btn.innerHTML = "Click me and check the console!!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

getComponent().then(comp=> {
  document.body.appendChild(comp);
});

