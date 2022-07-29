function filterMultiple(list) {
  //get list of products and returns a filtered list by multiple product
  let filtered = {};
  //iterate through the list
  list.forEach((item, index) => {
    let title = item.title;
    if (!filtered[title]) {
      filtered[title] = 1;
    } else {
      filtered[title]++;
    }
  })
  return filtered;
}

export default filterMultiple;