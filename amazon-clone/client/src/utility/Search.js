//Search function!!
export const filter = (data, search) => {
  console.log("What filter is receiving:", data, search);
  let lowerCaseSearch = search.toLowerCase();
  //should filter all the products that have "words included"
  let filtered = data.filter((product) => {
    let lowerCase = product.title.toLowerCase();
    if (lowerCase.includes(lowerCaseSearch)) {
      console.log("It includes it!!");
      return product;
    } else {
      return null;
    }
  })
  return filtered;
};
