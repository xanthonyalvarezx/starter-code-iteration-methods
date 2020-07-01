// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

kata6 = document.createElement('h1')
summary6 = document.createElement('summary')
details6 = document.createElement('details')
kata6.append('kata6')
summary6.append(kata6)
details6.append(summary6)
main.append(details6)

let personBalance =[]
let userBalance = users.filter(user => user.company === "ZENCO").map(user => user.balance)
personBalance.push(userBalance)
console.log({personBalance})
details6.append(personBalance)