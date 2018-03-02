module.exports = function keyPath(obj, value, path) {
  try {
    if (typeof obj !== 'object') {
      return;
    }
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          console.log(value);
          console.log(path);
        var t = path;
        var v = obj[key];
        newPath = path + '/' + key;
          console.log(newPath);
        if (v === value) {
          return newPath;
        } else if (typeof v !== 'object') {
          newPath = t;
        }
        var res = keyPath(v, value, newPath);
        if (res) {
          return res;
        }
      }
    }
  } catch (e) {
    alert(e.message);
  }
}
