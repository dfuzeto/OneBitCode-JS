//maked for my dear

let menu = parseInt(prompt('Escolha uma opcao: \n' + 
`1. Nossa data de namoro \n
2. Nossa primeira beijoca \n
3. Nossas inicias \n
4. Um coracao \n
5. Encerrar `))

do {
    switch (menu) {
        case 1:
            alert('22/06/23')
            break
        case 2:
            alert('11/05')
            break
        case 3:
            alert('A <3 L')
            break
        case 4:
            alert('S2')
            break
        case 5:
            alert('Encerrando...')
            break
    }
    
    if (menu != 5) {
        menu = parseInt(prompt('Escolha uma opção: \n' + 
        `1. Nosso ano de namoro \n
        2. Nossa primeira ficada \n
        3. Nossas iniciais \n
        4. Um coração \n
        5. Encerrar `));
    }

} while (menu != 5)