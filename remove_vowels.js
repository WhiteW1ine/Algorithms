
let str = "No offense but,\nYour writing is among the worst I've ever read"
let new_str = disemvowel(str)


function disemvowel(str) {
  for(var i = 0; i < str.length; i++){
    if(isVowel(str[i])){
      str = str.replace(str[i], "")
      i--
    }
  }
  return str
}

function isVowel(char){
  return ("aeiouAEIOU".indexOf(char) != -1)
}
