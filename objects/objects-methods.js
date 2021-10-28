let restaurant = {
    name: 'Taco Bell',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
       let seatsLeft = this.guestCapacity - this.guestCount
        
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount += partySize 
         
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize
    }
}

// this - references the object directly
//        is used within object declaration for functions


restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

