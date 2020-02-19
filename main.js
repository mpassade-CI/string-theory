function crazyCase(str) {
  let x = ''
  for (i=0; i<str.length; i++) {
    i % 2 === 0 ? x=x+str[i].toLowerCase() : x=x+str[i].toUpperCase()
  }
  return x
}

function ciEmailify(str) {
  let x = str.substring(0,str.indexOf(' '))
  let y = str.substring(str.indexOf(' ')+1)
  str = (x+'.'+y+'@codeimmersives.com').toLowerCase()
  return str
}

function exclaim(str) {
  let x = ''
  for (i=0; i<str.length; i++){
    if (str[i] === '.' || str[i] === '?'){
      x += '!'
    }
    else {
      x += str[i]
    }
  }
  return x
}

function reverse(str) {
  let x = ''
  for (i=str.length-1; i >= 0; i--){
    x += str[i]
  }
  return x
}

function crazyCase2ReturnOfCrazyCase(str){
  let x = ''
  for (i=0, y=0; i<str.length; i++, y++){
    if (str[i-1] === ' '){
      y++
    }
    if (y % 2 === 0){
      x += str[i].toLowerCase()
    }
    else {
      x += str[i].toUpperCase()
    }
  }
  return x
}

function titleCase(str) {
  let x = ''
  for (i=0; i < str.length; i++){
    if (i=== 0){
      x += str[i].toUpperCase()
    }
    else if (str[i-1] === ' '){
      x += str[i].toUpperCase()
    }
    else {
      x += str[i].toLowerCase()
    }
  }
  return x
}

function onlyVowels(str) {
  let x = ''
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (i=0; i<str.length; i++){
    if (vowels.includes(str[i])){
      x += str[i]
    }
  }
return x
}

function crazyCase3SonOfCrazyCase(str) {
  let x = ''
  let symbols = ' `1234567890-=[]\;,./~!@#$%^&*()_+{}|:"<>?'
  for (i=0, y=0; i<str.length; i++, y++){
    if (symbols.includes(str[i-1])){
      y++
    }
    if (y % 2 === 0){
      x += str[i].toLowerCase()
    }
    else {
      x += str[i].toUpperCase()
    }
  }
  return x
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}