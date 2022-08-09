export function filterMultiple(list) {
  //get list of products and returns a filtered list by multiple product
  let filtered = {};
  let productData = {};
  //iterate through the list
  list.forEach((item, index) => {
    let title = item.title;
    if (!filtered[title]) {
      filtered[title] = 1;
      productData[title] = item;
    } else {
      filtered[title]++;
    }
  })
  let data = Object.values(productData);
  return [filtered, data];
}

export function deleteFromFiltered(list, itemRemove) {

}