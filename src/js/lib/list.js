const showList = (divList, arrList) => {
  const ul = document.createElement('ul');
  let li;
  divList.appendChild(ul);
  for (const item of arrList) {
    li = document.createElement('li');
    //console.debug(item);
    li.innerText = `${item.name} (${item.email})`;
    ul.appendChild(li)
  }
};

export default showList;
