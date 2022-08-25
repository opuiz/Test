// idea taken from:
// https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php

function testicURL(UserInput) {
    const regex = UserInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(regex == null) {
        alert ('not a valid URL, try again')
        return 0;
    } else {
    return 1
    } 
}

 export { testicURL }

/*export const testicURL = (url) => {
    try {
      new URL(url);
    } catch (e) {
      console.error(e);
      
      return 0;
    }
    return 1;
  };
*/
/*function testicURL(URLInput) {
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(URLInput)) {
        return 1;
    } else {
        return 0;
    }
}
export { testicURL }*/