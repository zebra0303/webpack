import showList from './list.js';

function getAxios() {
  return import(/* webpackChunkName: 'axios' */ 'axios')
  .then(props => {
    //console.debug(props);
    const { default: axios } = props;
    //console.debug(axios);
    return axios;
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