function calculateBMI(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight !== 'number' || typeof height !== 'number') {
            reject('Arguments must be of type number');
        } else {
            resolve(weight / (height * height));
        }
    });
}

function displayBMI(weight, height) {
    calculateBMI(weight, height).then((result) => {
        console.log(`The BMI result is ${result}.`);

        if (result < 18.5) console.log('Status: UNDERWEIGHT');
        else if (result < 25) console.log('Status: NORMAL');
        else if (result < 30) console.log('Status: OVERWEIGHT');
        else if (result < 40) console.log('Status: OBESITY');
        else console.log('Status: SEVERE OBESITY');
    }).catch((err) => {
        console.log(err);
    });

    console.log(`Calculating BMI for weight ${weight} and height ${height}...`);
}

displayBMI(71, 1.74);
displayBMI(48, 1.60);
displayBMI(71, "text");
displayBMI(82, 1.72);
displayBMI(120, 1.80);
