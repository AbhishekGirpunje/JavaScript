// const insta = new Object()

const insta = {};

insta.name = "Abhi"
insta.id = 987654
insta.isLoggedIn = false

console.log(insta);

const newUsers = {
    name: "Abhi",
    id:987,
    fullUserInfo: {
        firstName:"sahil",
        lastName:"Rahut"
    }
}
// console.log(newUsers.fullUserInfo.firstName);//sahil

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = {...obj1,...obj2}
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id:1,
        email:"abh@gmail,com"
    },
    {
        id:2,
        email:"abfgbh@gmail,com"
    },
    {
        id:3,
        email:"abh@gmdfvbail,com"
    },
]
users[1].email
console.log(Object.keys(insta));//[ 'name', 'id', 'isLoggedIn' ]
console.log(Object.values(insta));//[ 'Abhi', 987654, false ]
console.log(Object.entries(insta));//[ [ 'name', 'Abhi' ], [ 'id', 987654 ], [ 'isLoggedIn', false ] ]

console.log(insta.hasOwnProperty("isLoggedIn"));

