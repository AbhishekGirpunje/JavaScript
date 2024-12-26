const myObject = {
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js","rb"]

for (const key in programming) {
    console.log(programming[key])
}