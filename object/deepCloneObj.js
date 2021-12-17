function deepCloneObj(obj) {
  const keys = Object.keys(obj)
  const newObject = {}

  for (const key of keys) {
    if (typeof obj[key] === 'object')  {
      newObject[key] = deepCloneObj(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  }
  return newObject
}

const consoles = {
  playstation: {
    price: 500,
    version: 5
  }
}

const objShallowCopy = {...consoles}
objShallowCopy.playstation.price = 100

console.log(consoles)

const objDeepClone = deepCloneObj(consoles)

objDeepClone.playstation.price = 500

console.log(consoles)

