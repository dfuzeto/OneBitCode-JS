let word = prompt('Type any word...')
let reverseWord = ''
//         ---------------x
for(let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i]
}
//       -------------x
if(word ==   reverseWord) {
    alert(`It's a palindrome`)
} else {
    alert(`It's not a palindrome. ${reverseWord}`)
}