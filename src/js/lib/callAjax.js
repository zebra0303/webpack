import showList from './list.js';

function getAxios() {
  return import(/* webpackChunkName: 'axios' */ 'axios')
  .then(props => {
    //console.debug(props);
    const { default: axios2 } = props;
    //console.debug(axios2);
    return axios2;
  });
}

export default async function printMe() {
  const axios = await getAxios();

  axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
    const divList = document.getElementById('list');
    while (divList.firstChild) {
      divList.removeChild(divList.firstChild);
    }
    const users = resp.data;
    users.sort(()=>(Math.random() - Math.random()));
    showList(divList, users);
  });
};