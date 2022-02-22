const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
    return drivers.filter(function(drivers){
    return drivers.toLowerCase() === string.toLowerCase();
})
}

function fuzzyMatch(drivers, string){
    const lengthOfString = string.length
    return drivers.filter(function(driver){
        return driver.slice(0, lengthOfString) === string
    })
    }


function matchName(drivers, name){
    return drivers.filter(function(hometown){
    return hometown.name === name
})
}
