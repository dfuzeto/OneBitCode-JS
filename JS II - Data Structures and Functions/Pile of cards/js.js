let cards = []
let menu

do {
    menu = parseInt(prompt(`1. Remove one card\n2. Add one card\n3.Exit`))
    switch (menu) {
        case 1:
            console.log(cards[0])
            cards.pop()
            if (cards.length <= 0) {
                console.log(`no cards avaiable`)
            }
            break
        case 2:
            const nc = prompt(`New card: `)
            cards.unshift(nc)
            break
        case 3:
            console.log(`leaving...`)
    }
} while (menu !== 3)