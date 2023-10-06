let cities = [];

const name = prompt('Hey tourist, what`s your name?');
let visited = confirm(`Have you visited any new city?`);

do {
    if (visited) {
        let city = prompt('Which city did you visit?');
        cities.push(city);
        visited = confirm('ave you visited any new city?')
    }
} while (visited);

alert(`Cities you visited: ${cities.join(', ')}`);
