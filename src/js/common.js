export default async function common () {
  const { default : _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash');
  console.log(_.join(["Hello", "Common"], " "));
};