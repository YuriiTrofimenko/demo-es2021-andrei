 /* // Primitive Types
let x = 10
let y = 'JS'
y = "JS (${x})"
// y = `JS (${x})` // interpolation
console.log(typeof x)
console.log(typeof y)
let z = {}
console.log(typeof z)

console.log((x / 3).toFixed(2))

try {
  console.log(a)
  // ---
} catch (error) {
  console.log(error.message)
} finally {
  console.log(x * x)
}

if (x === 0) {
  console.log(x)
} else if (x === 10) {
  console.log(x * x)
} else {
  console.log(x * x * x)
}

switch (x) {
  case 0:
    console.log(x)
    // break
  case 10:
    console.log(x * x)
    // break
  default:
    console.log(x * x * x)
}

console.log(x === 10 ? 'x = 10' : 'x != 10')

MAIN_LOOP : for (let i = 0; i < 3; i++) { // 3
  for (let j = 0; j < 3; j++) { // 9
    process.stdout.write(`i = ${i}, j = ${j}\t`)
    if (i === 1 && j === 1) {
      break MAIN_LOOP
      // j = 3
      // i = 3
    }
  }
  process.stdout.write('\n')
} */

/* while (condition) {
  
} */ 

/* do {

} while (condition) {
  
} */

/* foo() // (3 stage)

function foo() { // function definition (2 stage)
  console.log('Hello World!')
}

foo2() // function call (3 stage)

const foo2 = function () { // expression statement (3 stage)
  console.log('Hello World!')
} */

function parent() {
  // context
  const o = { count: 0 }
  return function () {
    return o.count++
  }
}

const child = parent()
/* console.log(child())
console.log(child())
console.log(child()) */

/* Objects */

// squareFunction(2)
// square(2)

/* const squareFunction = function (x) {
  console.log(x * x, 'from', this, 'scope')
}

const square = (x) => {
  console.log(x * x, 'from', this, 'scope')
}

// squareFunction(2)
square(2) */

// const numbers = [1, -1, 0, 100, 15, -4]
/* numbers.filter(n => n >= 0)
  .map(n => n * n)
  .sort((a, b) => b - a)
  .forEach(n => {
    console.log(n)
  }) */

/* const people = [
  {
    name: 'John',
    age: 31
  },
  {
    name: 'Bill',
    age: 66
  },
  {
    name: 'Mary',
    age: 20
  }
] */

// console.log(numbers.reduce((result, current) => result += current, 0) / numbers.length)

/* console.log(
  people.reduce((result, current) => result += current.age, 0) / people.length
) */


// TODO ?????????????????????? ?????????????????????????? ?????????????? ????????????????????,
// ???? ???????? ??????????, ?????????????? ?????????? ?????????????????????? ???????????? ???????????????????? ?????????????????? ???????????? ????????,
// ??????????, ?????? sort,
// ???????????? ?????? ?????????? ???????????????????? ???? ???? ??????????????, ?? ???????? ???? ????????,
// ?? ?????????????????? ?????? ?????????????????? ???????????? ?????? ???????????????????? ?? ?????????????? ????????????????????

/* mySort(numbers, (a, b) => b - a).forEach(n => {
  console.log(n)
}) */

// console.log(new Date())

// const regex = /^[a-z0-9]{1,16}@[a-z]{1,16}(\.[a-z]{2,3}){1,2}$/ // tyaa@ukr.net
// myemail2022@mail.in.ua
// console.log(regex.test('myemail2022@mail.in.ru.com'))

/* people.push({
  // name: 'Yurii',
  age: 35
})

people[3].salary = 20000 */

// console.log(people[3])

/* function Person(name, age) {
  if (!new.target) {
    return new Person(name, age)
  }
  this.name = name
  this.age = age
} */

/* class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.toString = function () {
      return this.name
    }
  }
}

people.push(new Person('Yurii', 35))
// people.push(Person('Noname', 30))
console.log(people[3].toString(), ', ' ,people[4]) */

const numbers = [1, -1, 0, 100, 15, -4]

function mySort(array, compare) {
  // ????????????????????????, ?????? ???????????? ???? ????????????????????
  let isSorted
  do {
    // ????????????????????????, ?????? ???????????? ????????????????????
    isSorted = true
    // ???????? ???????????????????????? ???????????????? ???????? ?????? ?????????????????? ???????????????? ??????????????
    for (let i = 0; i < array.length - 1; i++) {
      const current = array[i]
      const next = array[i + 1]
      // ?????????????? ?????????????????? ???????????????? ?????????????????? ???????????????? ??????????????
      // ???? ?????????????????? ?????? ???????????????????????? ???? ??????????????????????
      if (compare(next, current) > 0) {
        // ???????? ?????? ?????????? ?????????????? ???????????????? - ???? ?? ???????????????? ?????????????? -
        // - ???????????? ???? ??????????????
        array[i] = next
        array[i + 1] = current
        // ???????? ???????????????? ???? ???????? ???? ?????? ???????????????? ?????? ???????????????? ??????????????,
        // ???????????? ???? ???????????? ???????????????? ???????????????????? ?????????? for
        // ???????????? ?????? ???? ?????? ????????????????????
        isSorted = false
      }
    }
  } while (!isSorted) // ?????????? ?????????????? ?????????????? ???????????? for ???? ??????????????
  // ??????????????????: ???? ???????????????? ???? ???????? ???? ?????? ???????????????? ?????? ???????????????? ???????????????
  // ???????? ????????????????, ???????????? ???????????? ?????? ???? ????????????????????????,
  // ???????? do-while ?????????? ?????????????????? ?????? ??????, ???? ???????? ?????????????????? ?????? ?????????????????? ??????
}

// const names = ['Noname', 'Bill', 'John', 'Boris', 'Mary']
const people = [
  {
    name: 'John',
    age: 31
  },
  {
    name: 'Bill',
    age: 66
  },
  {
    name: 'Mary',
    age: 20
  }
]
// mySort(numbers, (a, b) => a - b)
// mySort(numbers, (a, b) => b - a)
// mySort(names, (a, b) => a.localeCompare(b))
// mySort(people, (a, b) => b.name.localeCompare(a.name))
// mySort(people, (a, b) => b.age - a.age)

// console.log(people)

// demo changes 1
// demo changes 2

// OOP - 2

class Person {
  // ???????????????????? ?????????????????? (private) ???????????????? (????????)
  #name
  #age
  constructor(name, age) {
    // ?????????????????????????? ?????????????????? ???????????????? (????????)
    this.setName(name)
    this.setAge(age)
    // ???????????????????? ?? ?????????????????????????? ?????????????????? (public) ????????????????
    //this.age = age
    // ??????????, ???????????? ?????????????? ?????????? ???????????????? ????????????,
    // ???????????????????????????? ?????????????? ???????????? Person
    this.toString = function () {
      return `name: ${this.#name}, age: ${this.#age}`
    }
  }
  // ???????????????????? ?????????????????? ???????????? ?????????????????? ???????????????? ?? ???????????????? ????????????????
  setName (name) {
    if (!/^[A-Z??-??][a-z??-??]{0,255}$/.test(name)) {
      throw new Error('Wrong "name" argument')
    }
    this.#name = name
  }

  setAge (age) {
    if (!(typeof age === 'number' && age >= 1 && age < 130)) {
      throw new Error('Wrong "age" argument')
    }
    this.#age = age
  }

  // ???????????????????? ?????????????????? ???????????? ?????????????????? ???????????????? ???? ?????????????????? ????????????????
  getName() {
    return this.#name
  }
  getAge() {
    return this.#age 
  }
}
// ??????????????:
// ???????????????????? ?????????? Person ??????, ?????????? ?????????????? ???????????? ???????? ???????????? ??????????????????????,
// ?? ?????????? ???????? ?????????????????????????? ?????? ?????????????? ???????????? ???????????? setAge(age),
// ???? ???????????????????????? ???????????????? ???????????? 1 ?? ???????????? 130,
// ?? ?????????? ???????????????? ?????????? ?????????????????? ???????????????? ???????????????? getAge()
// inheritance sample
class Student extends Person {
  // ???????????????? ???????????????????????? ?????????????????? ???????????? Student
  constructor(name, age, avgScore) {
    // ?????????? ???????????????????????? ?????????????????????????? ???????????? Person
    super(name, age)
    // ???????????????????? ???????????? ??????????????, ???????????????????? ???? ????????????????????,
    // ?????????? ?????????????????? "?????????????? ???????? ????????????????????????"
    this.avgScore = avgScore
    // ?????????????????????????????? ???????????? toString
    this.toString = function () {
      return `Person {name: ${this.getName()}, age: ${this.getAge()}, avgScore: ${avgScore}}`
    }
  }
}

// ?????????????????????? ?? ?????????? ???????????? Teacher ?????????? Person,
// ?????????????????? ?????????????????? "???????????? ????????????????" - this.salary
// ?????????????????????? ?? ?????????? ???????????? Teacher ?????????? Person,
// ?????????????????? ?????????????????? "???????????? ????????????????" - this.salary
class Teacher extends Person {
  constructor(name, age, salary) {
      super(name, age)
      this.salary = salary
      this.toString = function () {
          return `Person {name: ${this.getName()}, age: ${this.getAge()}, salary: ${this.salary}}`
      }
  }
  // ?????????????????????? ?????????? (???? ???????? ?????????? ????????????, ?? ???? ?????? ????????????????),
  // ???????????????????????? ?????????????????? (????????????) ???????? Teacher
  static createInstance (name, age, salary) {
    // ???????????????? ???????????????? ????????????????????
    const instance = new Teacher(name, age, salary)
    // ?????????????????? ????????????????????: ???????????? ???? ???????????????????? ?????????? ??????????????
    Object.preventExtensions(instance)
    // ?????????????? ???????????????????????? ????????????????????
    return instance
  }
 }
 
 /* const st1 = new Student('St1', 18, 10.5)
 console.log(st1.toString())*/
 // const tch1 = new Teacher('Tch1', 30, 20000)
  const tch1 = Teacher.createInstance('Noname', 30, 20000)
  console.log(tch1.toString())
 // tch1.#name = ''
 // tch1.setName('')
 // tch1.setName('ABC')
 // tch1.setName(123)
 // tch1.setName('??')
 // tch1.setName('????????')
 // tch1.setName('Andrei')
 // tch1.name = '123'
 // tch1.setName('????????????????????????????????')
 // console.log(tch1.toString())
 // console.log(tch1)

 /* const names = new Set() // ??????????????????
 names.add('John')
 names.add('Bill')
 names.add('John')
 console.log(names) */

 /* const names = []
 names.push('John')
 names.push('Bill')
 names.push('John')
 console.log(names) */

 const people2 = new Map() // ??????????????
 people2.set('John', 30)
 people2.set('Bill', 20)
 people2.set('Bill', 40)
 console.log(people2)
 console.log(people2.has('Bill'))
 console.log(people2.has('Mary'))
 console.log(people2.get('Bill'))
