//Demo 1

var incidentGR = new GlideRecord('incident')
incidentGR.query()
while(incidentGR.next()) {
    gs.print(incidentGR.number)
}

//Shorthand for printing does not work in ServiceNow
var incidentGR = new GlideRecord('incident')
incidentGR.addQuery('priority', 1)
incidentGR.query()
while(incidentGR.next()) {
    gs.print('Priority 1 Incident: ${incidentGR.number} : ${incidentGR.priority}`)
}

var incidentGR = new GlideRecord('incident')
incidentGR.addQuery('priority', 1)
incidentGR.query()
while(incidentGR.next()) {
    gs.print('Priority 1 Incident: ' + incidentGR.number + ' : ' + incidentGR.priority.getDisplayValue())
}

var incidentGR = new GlideRecord('incident')
incidentGR.get('d3e162572fa63010c621c886f699b6ab')
gs.print(incidentGR.number + ' has a sys_id of ' + incidentGR.sys_id)



var queryString = 'category=inquiry^active=true^opened_by=6816f79cc0a8016401c5a33be04be441'
var incidentGR = new GlideRecord('incident')
incidentGR.addQuery(queryString)
incidentGR.query()
while(incidentGR.next()) {
    gs.print(incidentGR.number)
}


var newIncident = new GlideRecord('incident')
newIncident.newRecord()
newIncident.short_description = 'This incident was created from a background script'
var newIncidentSysID = newIncident.insert()
gs.print(newIncidentSysID)


var newIncidents = []
var counter = 1
var incidentGR = new GlideRecord('incident')
while(counter <=5) {
    incidentGR.newRecord()
    incidentGR.short_description = 'Incident #' + counter
    counter++
    newIncidents.push(incidentGR.insert())
}
gs.print(newIncidents)


var incidentGR = new GlideRecord('incident')
incidentGR.addQuery('short_description', 'Incident #3')
incidentGR.query()
while(incidentGR.next()) {
    gs.print(incidentGR.number + ' has ' + incidentGR.short_description)
}

var incidentGR = new GlideRecord('incident')
incidentGR.addQuery('short_description', 'Incident #3')
incidentGR.query()
while(incidentGR.next()) {
    incidentGR.deleteRecord()
}


//Demo 2 - Not all written here

var incidentGR = new GlideRecord('incident')
incidentGR.orderBy('short_description')
incidentGR.query()
while()


var fetchUtils = Class.create();
fetchUtils.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    
    createDog: function() {
        var dogName = this.getParameter('sysparm_dog_name');
        var dogAge = this.getParameter('sysparm_dog_age');
        var dogShots = this.getParameter('sysparm_dog_shots');
        var dogNeutered = this.getParameter('sysparm_dog_neutered');
        
        var newDog = new GlideRecord('x_699650_fetch_dogs');
        newDog.newRecord();
        newDog.name = dogName;
        newDog.age = dogAge;
        if(dogShots) {
            newDog.shots = true;
        }
        if(dogNeutered) {
            newDog.neutered = true;
        }
        var dogNumber = newDog.number.getDisplayValue();
        var sysID = newDog.insert();
        var dogLink = newDog.getLink()'

        return dogName + '|' + dogNumber + '|' + dogLink;
    },

    type: 'fetchUtils'
});