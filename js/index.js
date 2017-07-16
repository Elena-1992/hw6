const atomStation = new Station();
atomStation.init();

function Station() {
    this.worker = false
    this.blocks = []
    this.commands = [
        {
            "command": 'commands list',
            "description" : "Show all commands"
        },
        {
            "command": 'station status',
            "description" : "Show station status"
        },
        {
            "command": 'add block',
            "description" : "Add block to station"
        },
        {
            "command": 'relax',
            "description" : "The worker goes to rest"
        },
        {
            "command": 'exit',
            "description" : "Exit from the program"
        }

    ]
    this.listCommands = function(){
        let result = []
        for(let item of this.commands) {
            result.push('\n command: '+ item.command + " - " + item.description)
        }
        alert(result)
    }
    this.init = function(){
        this.worker = this.addWorker()
        this.addBlock()
        this.startWorking()
        console.log(this.worker)
    }
    this.startWorking = function(){
        alert("To see a list of available commands, enter the: commands list");
        do{
            const cmd = prompt ("Enter the command")
            if(cmd == "exit") break
            switch (cmd) {
                case "commands list": {
                    this.listCommands()
                    break
                }
                case "add block": {
                    this.addBlock()
                    break
                }
                case "station status": {
                    this.stationStatus()
                    break
                }
                case "relax": {
                    this.worker.relax(this.blocks)
                    break
                }
                default:
                    alert(cmd + " no found")
                    break
            }
        }while(true)
    }

    this.addWorker = function(){
        const create = confirm ("Create your account?")

        if(create == true) {
            const validate = function () {
                const addName = prompt("Add name")
                const addSurName = prompt("Add surname")
                const addPass = prompt("Add password")
                if(addName.length < 2){
                    alert(error.name)
                    validate()
                }else if(addSurName.length < 2){
                    alert(error.surname)
                    validate()
                }else if(addPass.length < 2){
                    alert(error.pass)
                    validate()
                }else{
                    alert("You create new account")
                    return new Worker(addName, addSurName, addPass)
                    }
                }
                const error = {
                  name: "Name is not correct!",
                  surname: "Incorrect surname, try again ! ",
                  pass: "Incorrect pass, try again ! "
                }
                return validate()
            }else{
            alert("Good by !")
        }
    }

    this.addBlock = function() {
        const newBlock = new Block()
        this.blocks.push(newBlock)
        console.log(newBlock)
    }

    this.stationStatus= function() {
        let result = []
        for(let block of this.blocks) {
            console.log(block)
            result.push('\n Block temperature: '+ block.temperature + " - Block capacity: " + block.capacity)
        }
        alert(result)
    }

}
