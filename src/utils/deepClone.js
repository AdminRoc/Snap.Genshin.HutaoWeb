export const deepClone = function (obj) {
  //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
  var objClone = Array.isArray(obj) ? [] : {};
  //进行深拷贝的不能为空，并且是对象或者是数组
  if (obj && typeof obj === "object") {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = this.deepClone(obj[key]);
        }
        else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
