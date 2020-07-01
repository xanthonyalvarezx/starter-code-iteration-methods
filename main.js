// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

kata1 = document.createElement('h1')
summary1 = document.createElement('summary')
details1 = document.createElement('details')
kata1.append('kata1')
summary1.append(kata1)
details1.append(summary1)
main.append(details1)
//
const active = users.filter(user => user.isActive === true)
details1.append(JSON.stringify(active))
//
kata2= document.createElement('h1')
summary2 = document.createElement('summary')
details2 = document.createElement('details')
kata2.append('kata2')
summary2.append(kata2)
details2.append(summary2)
main.append(details2)
//
let userEmail = []
const e = users.map(user => user.email)
userEmail.push(e)
details2.append(userEmail)
//
kata3 = document.createElement('h1')
summary3 = document.createElement('summary')
details3 = document.createElement('details')
kata3.append('kata3')
summary3.append(kata3)
details3.append(summary3)
main.append(details3)
//
const company = users.some(user => user.company === 'OVATION')
details3.append(company)
//
kata4 = document.createElement('h1')
summary4 = document.createElement('summary')
details4 = document.createElement('details')
kata4.append('kata4')
summary4.append(kata4)
details4.append(summary4)
main.append(details4)
//
const age = users.find(user => user.age === 38)
details4.append(JSON.stringify(age))
//
kata5 = document.createElement('h1')
summary5 = document.createElement('summary')
details5 = document.createElement('details')
kata5.append('kata5')
summary5.append(kata5)
details5.append(summary5)
main.append(details5)
//
const isActiveAge = users.filter(user => user.age === 38).find(user => user.isActive)
details5.append(JSON.stringify(isActiveAge))
//
kata6 = document.createElement('h1')
summary6 = document.createElement('summary')
details6 = document.createElement('details')
kata6.append('kata6')
summary6.append(kata6)
details6.append(summary6)
main.append(details6)
//
let personBalance =[]
let userBalance = users.filter(user => user.company === "ZENCO").map(user => user.balance)
personBalance.push(userBalance)
console.log({personBalance})
details6.append(personBalance)
//
kata7 = document.createElement('h1')
summary7 = document.createElement('summary')
details7 = document.createElement('details')
kata7.append('kata7')
summary7.append(kata7)
details7.append(summary7)
main.append(details7)
//
const userTag = users.filter(user => user.age).includes(user => user.tag === 'fugiat' )
details7.append(userTag)
