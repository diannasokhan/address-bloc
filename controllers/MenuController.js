const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: 'list',
                name: 'mainMenuChoice',
                message: 'Please choose from an option below: ',
                choices: [
                    'Add new contact',
                    'Exit',
                    'Get date'
                ]
            }
        ];
        this.contacts = [];
    }
    main(){
        console.log('Welcome to AddressBloc!');
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice){
                case 'Add new contact':
                    this.addContact();
                    break;
                case 'Exit':
                    this.exit();
                case 'Get date':
                    this.getDate();
                    break;
                default:
                    console.log('Invalid input');
                    this.main;
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    clear(){
        console.log('\x1Bc');
    }
    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
    }
    exit(){
        console.log('Thanks for using AddressBloc!');
        process.exit();
    }
    getDate(){
        let date = new Date();
        let newDate = 'Today is '+ date.toDateString() + ' and the time is ' + date.toLocaleTimeString();
        console.log(newDate);
        }
    getContactCount(){
        return this.contacts.length;
    }
    remindMe(){
        return 'Learning is a life-long pursuit.'
    }
}