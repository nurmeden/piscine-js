const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
const clone1 = person
const clone2 = person
Object.freeze(clone1)
Object.freeze(clone2)
person.age++
person.country = "FR"

const samePerson = person

