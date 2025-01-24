console.log(this)

const person = {
    name: "Abhishek",
    age: 88,
    new: function(){
        console.log(this.age)
    }
}
person.new();