character1 = {}
character2 = {}

character1.name = prompt('Attacker name: ')
character1.damage = parseFloat(prompt('Attacker damage: '))
character2.name = prompt('Defenser name: ')
character2.hp = parseFloat(prompt('Defenser health points: '))
character2.shield = confirm('Defenser have shields?')

if (character2.shield) {
    character1.damage = character1.damage / 2
 }

alert(`${character1.name} attacked ${character2.name} \n
 ${character2.name} is using shield? ${character2.shield ? `Yes` : `No`} \n`)

 if (character1.damage >= character2.hp) {
    alert(`${character1.name} killed ${character2.name}`);
} else {
    character2.hp -= character1.damage;
    alert(`${character2.name} hp is ${character2.hp}`);
}
