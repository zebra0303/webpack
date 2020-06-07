//import '../css/list/list.scss';
console.log('list')

async function getComponent() {
  const { default : _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash');

  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "List"], " ");

  btn.innerHTML = "Click me and check the console!!";
  const { default : printMe } = await import(/* webpackChunkName: 'print' */ '../print.js');
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

getComponent().then(comp=> {
  document.body.appendChild(comp);
});

