let myMap = new Map( [
    ['name', 'Lia'],
    ['color', 'blue']
])

console.log(myMap)
myMap.set('alias', 'li')
myMap.set('name', 'LIA')
console.log(myMap)

console.log(myMap.get('name'))

console.log(myMap.has('name'))
console.log(myMap.delete('color'))
console.log(myMap)

console.log(myMap.keys())
console.log(myMap.values())

myMap.clear()

console.log(myMap)
