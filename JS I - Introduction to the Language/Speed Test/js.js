let vehicle1 = {}
let vehicle2 = {}

//  
vehicle1.name = prompt(`Fist vehicle name: `)
vehicle1.speed = parseFloat(prompt(`First vehicle speed: `))
vehicle2.name = prompt(`Second vehicle name: `)
vehicle2.speed = parseFloat(prompt(`Seocnd vehicle speed: `))
if (isNaN(vehicle1.speed) || isNaN(vehicle2.speed)) {
    alert('Arguments invalid, only numbers in speed!')
} else if (vehicle1.speed > vehicle2.speed) {
    alert(`Vehicle more fast is: ${vehicle1}`)
} else if (vehicle2.speed > vehicle1.speed) {
    alert(`Vehicle more fast is: ${vehicle2}`)
} else if (vehicle1.speed = vehicle1.speed) {
    alert(`The speed are the same!: ${vehicle1.speed}`)
}