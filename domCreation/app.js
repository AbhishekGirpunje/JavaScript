const div = document.createElement('div')
console.log(div)
div.className = 'main'
div.id = Math.random(Math.random() * 10 +1)
div.setAttribute("title","Baby Code")
div.style.backgroundColor = 'yellow'
div.style.padding = "12px"
// div.innerHTML = "Do it"
const addText = document.createTextNode('do it')
div.appendChild(addText)
document.body.appendChild(div)