let saldo = parseFloat(prompt('How much money you have?'))

let menu = parseInt(prompt(`You have: ${saldo}$\n\n choose one option: \n` + 
`1. Add money
2. Remove money
3. Leave`))

do {
    switch (menu) {
        case 1:
            const add = prompt('How much money you add?')
            saldo += add
            break
        case 2:
            const remove = prompt('How much money you remove?')
            saldo -= remove
            break
        case 3:
            alert('Ending...')
            break
    }
    
    if (menu != 3) {
        menu = parseInt(prompt(`You have: ${saldo}$\n\n choose one option: \n` + `
        1.Add money
        2. Remove money
        3. Leave`))
    }

} while (menu != 3)