let menu

do {
    menu = parseInt(prompt(`1. Area of triangle\n` + 
    `2. Area of retangle\n` +
    `3. Area of square\n` +
    `4. Area of trapeze\n` +
    `5. Area of circle \n` +
    `6. Leave`))
// /////////////////////////////////////////
    switch(menu) {
        case 1:
            const baset = prompt(`base: `)
            const heightt = prompt(`height: `)
            alert(`Triangle area is ${baset * heightt / 2}`)
        case 2:
            const baser = prompt(`base: `)
            const heightr = prompt(`height: `)
            alert(`Retangle area is ${baser * heightr}`)
        case 3:
            const side = prompt(`side: `)
            alert(`Square area is ${side * side}`)
        case 4:
            const base = prompt(`principal base: `)
            const smallbase = prompt(`small base: `)
            const height = prompt(`height: `)
            alert(`Area of trapeze is ${(base + smallbase) * height / 2 }`)
        case 5:
            const pi = 3.14
            const light = prompt(`radius: `)
            alert(`Circle area is ${pi * (light * light)}`)
    }

} while (menu !== 6)

//no functions avoid fatigue rs