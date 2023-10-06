let pacientes = [];
let menu;

do {
    menu = parseInt(prompt(
        'Menu:\n' +
        '1. Consult patient\n' +
        '2. New patient\n' +
        '3. Display patients\n' +
        '4. Exit'
    ));

    switch (menu) {
        case 1:
            alert(pacientes.unshift() + `  was consulted`)
            break;
        case 2:
            let newPatient = prompt('What is patient name?');
            pacientes.push(newPatient);
            break;
        case 3:
            let exibitionList = pacientes.join(', ');
            alert(`You have ${pacientes.length} patients:\n${exibitionList}`);
            break;
        case 4:
            alert('Exiting...');
            break;
        default:
            alert('Invalid option. Please choose a valid menu option.');
    }
} while (menu !== 4);
