module.exports = function check(str, bracketsConfig) {
  var arr = str.split('');
      for(var j = 0; j < arr.length-1; j++) {
        if (arrN(arr) === false) return false; 
        if (arr[j+1] == bracketsConfig[arrN(arr)][1]) {
          arr.splice(j, 2);   
          if (arr.length == 0) return true;
          if (arr.length == 1) return false;
          j = -1;
        }
      } 
      return false;
function arrN(arr) {
  for(var i = 0; i < bracketsConfig.length; i++) {
    if (arr[j] == bracketsConfig[i][0]) {
      return i;}
    }
   return false;
}
};

