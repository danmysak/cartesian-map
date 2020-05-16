function generate(list, sourceList, postCallback = (items) => [...items], currentItems = []) {
  if (currentItems.length === sourceList.length) {
    list.push(postCallback(currentItems));
  } else {
    const items = sourceList[currentItems.length];
    for (const item of Array.isArray(items) ? items : [items]) {
      currentItems.push(item);
      generate(list, sourceList, postCallback, currentItems);
      currentItems.pop();
    }
  }
}

module.exports = function(callback) {
  const list = [];
  if (Array.isArray(this)) {
    generate(list, this.map(callback));
  } else if (this instanceof String) {
    generate(list, this.split('').map(callback), (items) => items.join(''));
  } else {
    throw new Error(`"this" is neither an array nor a string`);
  }
  return list;
};