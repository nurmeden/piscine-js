const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
const clone1 = person
const clone2 = person

person.age++
person.country = "FR"

const samePerson = person

