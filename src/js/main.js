require("@babel/polyfill");

console.log('main 2');

async function getComponent() {
  const { default: common } = await import(/* webpackChunkName: 'common' */ './common.js');
  const { default : _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash');
  const { default: printMe } = await import(/* webpackChunkName: 'print' */ './print.js');

  common();
  const elem = document.createElement('div');
  const btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!!";
  btn.onclick = printMe;
  elem.innerHTML = _.join(["Hello", "Main"], " ");
  elem.appendChild(btn);
  return elem;
}

getComponent().then(component => {
  document.body.appendChild(component);
});