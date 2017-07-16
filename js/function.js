function Block(){
    this.temperature = 50
    this.capacity = 50
    this.temperatureUp = function(){
        this.temperature = Math.floor(this.temperature + (Math.random() * 10))
    }
    this.capacityDown = function(){
        this.capacity = Math.floor(this.capacity - (Math.random() * 10))
    }
}

function Worker(firstName, lastName, password) {
    this.firstName = firstName
    this.lastName = lastName
    this.password = password

    this.relax = function(blocks){
        for(let block of blocks) {
            block.temperatureUp()
            block.capacityDown()
        }
    }
}