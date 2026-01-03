function randomChoice(choiceOptions){
  if(!choiceOptions || typeof(choiceOptions) == "string") return null

  if(Array.isArray(choiceOptions)){
      let arrayLength = choiceOptions.length 
      let randomValue = Math.floor(Math.random()*arrayLength)
      return choiceOptions[randomValue]
  }

  else if(typeof(choiceOptions) == "object"){
      let transformedArray = Object.keys(choiceOptions)
      let arrayLength = transformedArray.length
      let randomValue = Math.floor(Math.random()*arrayLength)
      return choiceOptions[transformedArray[randomValue]]
  }
}

export default randomChoice