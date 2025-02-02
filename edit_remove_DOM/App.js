const allListItem = document.querySelectorAll('li')
const secondWord = allListItem[1];

const newWord = document.createElement('li')
newWord.textContent = "Aashay"
secondWord.replaceWith(newWord)

// // Get ALL <li> elements (returns a NodeList)
// const allListItems = document.querySelectorAll('li');

// // Access the second <li> (index 1)
// const secondWord = allListItems[1]; // ✅ Correct

// const newWord = document.createElement('li');
// newWord.textContent = "Aashay";
// secondWord.replaceWith(newWord);

const AllItem = document.querySelectorAll('li')
const SecWord = AllItem[1];
SecWord.remove();
