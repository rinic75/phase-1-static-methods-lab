class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string) {
    const exclude = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the' ]
    const newArry =[]
    const word = string.split(' ')
    for(let i=0 ; i < word.length; i++) {
      if(i===0) {
        newArry.push(this.capitalize(word[0]))
      } else {
        if(exclude.includes(word[i])) {
          newArry.push(word[i])
        } else {
          newArry.push(this.capitalize(word[i]))
        }
      }
    }
    return newArry.join(' ')
  }
}