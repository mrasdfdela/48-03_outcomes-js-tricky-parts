function curriedAdd(total) {
  if (!total) return 0;
  return function innerAdd(y){
    if(y){
      total += y;
      return innerAdd
    } else {
      return total;
    }
  }
}

module.exports = { curriedAdd };
