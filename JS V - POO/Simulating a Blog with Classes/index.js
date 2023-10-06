const Author = require('./Author')

const john = new Author(`John doe`)

const post = john.writePost('title', 'loerm')

post.addComent('janny doe', 'perfect')

console.log(john)
console.log(post)