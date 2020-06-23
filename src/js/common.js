const common = async () => {
  const { default : _ } = await import(/* webpackChunkName: 'lodash' */ 'lodash');
  console.log(_.join(["Hello", "Common"], " "));
  //console2.log('exception!!!');
};

export default common;