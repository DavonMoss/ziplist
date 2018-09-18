function zipList(list1, list2) {
  const retVal = [];
  // hw specifies equal length lists
  for (let i = 0; i < list1.length; i++) {
    retVal.push(list1[i]);
    retVal.push(list2[i]);
  }
  return retVal;
}

function zipListTheSimpleWay(list1, list2) {
  const temp = _.zip(list1, list2);
  return _.flatten(temp);
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
