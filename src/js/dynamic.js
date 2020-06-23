import common from './common';
common().then(()=> {
  console.debug('common done!');
});

async function getComponent() {
  const { default : _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash');

  const element = document.createElement("span");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "Dynamic import", ""], " ");

  btn.innerHTML = "Show random user list!!";
  const { default : printMe } = await import(/* webpackChunkName: 'callAjax' */ './lib/callAjax.js');
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

getComponent().then(comp => {
  const divBtn = document.getElementById('btn'); 
  divBtn.appendChild(comp);
});

