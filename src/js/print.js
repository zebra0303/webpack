function getAxios() {
  return import(/* webpackChunkName: 'axios' */ 'axios')
  .then(props => {
    console.debug(props);
    const { default: axios2 } = props;
    console.debug(axios2);
    return axios2;
  });
}

export default async function printMe() {
  console.log('I get called from print.js!');
  const axios = await getAxios();

  axios.get('http://webcode.me').then(resp => {
    console.debug(resp.data);
  });
};