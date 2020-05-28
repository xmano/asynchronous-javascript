import readline from 'readline-promise';
import { sumTwoNumbers } from './sum'
import { sumTwoNumbersSlow, sumTwoNumbersFaster } from './sumSlow'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

async function displayMenu() {
    console.clear();
    const MenuOptions = {
        1: "Sum two random numbers",
        2: "Sum two random numbers (slow)",
        3: "Sum two random numbers (faster)",
        4: "Exit"
    }
    
    console.log('Choose an option from the menu and confirm selection by hiting <enter>\n');
    
    for (const option in MenuOptions) {
        console.log('(' + option + ') ' + MenuOptions[option])
    }

    const choosedOption = parseInt(await rl.questionAsync('\nYour choice:'));

    switch(choosedOption) {
        case 1: {
            await sumTwoNumbers();
            await rl.questionAsync('Hit <enter> to get back to the menu');
            displayMenu();
            break;
        }
        case 2: {
            await sumTwoNumbersSlow();
            await rl.questionAsync('Hit <enter> to get back to the menu');
            displayMenu();
            break;
        }
        case 3: {
            await sumTwoNumbersFaster();
            await rl.questionAsync('Hit <enter> to get back to the menu');
            displayMenu();
            break;
        }
        case 4: {
            console.log('Bye');
            rl.close();
        }
    }
}

displayMenu();
