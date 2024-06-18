// const arr = ["Mezba vai", "Mizan vai", 'Tanmoy Vai']

// console.log(arr)
// arr.push("Rakib Vai")
// console.log(arr)


// //immutable way
// const arr2 = [ ...arr, 'Firoz Vai']
// console.log(arr2)

//function currying 

const add =(a)=> {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
// console.log(add(1)(1)(1))
const level = add(1)
console.log(level(2)(2))