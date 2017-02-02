// Sample Version
function detectStringPassword(stringArray) {
  for (var i = 0; i < stringArray.length; i++) {
    var string = stringArray[i];
    if (string.toLowerCase().indexOf("password") !== -1) {
      return true;
    }
  }

  return false;
}

// function detectCookie(items) {
//   for (var i = 0; i < items.length; i++) {
//     var item = items[i];
//     if (item.toLowerCase().indexOf("cookie") !== -1) {
//       return true;
//     }
//   }
//
//   return false;
// }
