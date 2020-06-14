// Question 1 
var user = {}
user.name = "John"
user.surname = "Mike"
console.log(user)
user.name = "Peter"
delete user["name"]
console.log(user)

// Question 2

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var price = 0
for(let key in fruit){
    price += fruit[key]
}
console.log("pieces of fruit is "+ price)