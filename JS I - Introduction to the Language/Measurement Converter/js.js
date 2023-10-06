const number = parseFloat(prompt('Your measurement in meters: '))

alert(`mm: ${number * 1000}\n
cm: ${number * 100} \n
dm: ${number * 10} \n
m: ${number} \n
dam: ${number / 10} \n
hm: ${number / 100} \n
km: ${number / 1000} \n `)