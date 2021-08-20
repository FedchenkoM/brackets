module.exports = function check(str, bracketsConfig) {
  let openBrackets = []
  let closedBrackets = []
  let config = {}

  bracketsConfig.map(i => {
    openBrackets.push(i[0])
    closedBrackets.push(i[1])
    config[i[1]] = i[0]
  })

  let stack = []

  for(let i = 0; i < str.length; i++) {
    let currentBracket = str[i]
    let topEl = stack[stack.length - 1]

    if(openBrackets.includes(currentBracket) && closedBrackets.includes(currentBracket)) {
      if(topEl === currentBracket) {
        stack.pop()
      } else {
        stack.push(currentBracket)
      }
    } else if( openBrackets.includes(currentBracket) ){
      stack.push(currentBracket)
    } else {
      if( stack.length === 0 ) {
        return false
      } 

      if(config[currentBracket] === topEl) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0

}


// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// check('|()|(||)||',config7)

