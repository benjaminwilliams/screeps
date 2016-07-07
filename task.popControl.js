var config = require('config');
var taskEdit = require('task.edit');

// lower number = higher priority
var priority = {
    har: 200,
    upg: 220,
    bul: 240
};

let checkHarvester = function(){
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    //console.log('Harvesters: ' + harvesters.length);

    if(harvesters.length < config.targetCreeps.harvester && Game.spawns.Spawn1.energy > priority.har) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
};

let checkUpgrader = function(){
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    //console.log('upgraders: ' + upgraders.length);

    if(upgraders.length < config.targetCreeps.upgrader && Game.spawns.Spawn1.energy > priority.upg) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    }
};

let checkBuilder = function(){
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    //console.log('builder: ' + builders.length);

    if(builders.length < config.targetCreeps.builder && Game.spawns.Spawn1.energy > priority.bul) {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    }
};

let checkBalance = function(){
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var name = "";
    let role = "none";
    var _checkUpgrader = function(name){
        if(upgraders.length < config.targetCreeps.upgrader){
            taskEdit.changeRole(first, "upgrader");
            role = "upgrader";
        }
    };
    var _checkBuilder = function(name){
        if(builders.length < config.targetCreeps.builder){
            taskEdit.changeRole(first, "builder");
            role = "builder";
        }
    };
    var _checkHarvester = function(name){
        if(harvesters.length < config.targetCreeps.harvester){
            taskEdit.changeRole(first, "harvester");
            role = "harvester";
        }
    };
    var _alertConsole = function(name){
        console.log('too many harvesters, changing: ' + name);
        console.log(first + "'s new role: " + role);
    };

    if(harvesters.length > config.targetCreeps.harvester){
        name = harvesters[0].name;
        _checkUpgrader(name);
        _checkBuilder(name);
        _alertConsole(name)
    }
    if(upgraders.length > config.targetCreeps.upgrader){
        let first = upgraders[0].name;

        console.log('too many upgraders, changing: ' + first);
        if(harvesters.length < config.targetCreeps.harvester){
            taskEdit.changeRole(first, "upgrader");
            role = "upgrader";
        }
        if(builders.length < config.targetCreeps.builder){
            taskEdit.changeRole(first, "builder");
            role = "builder";
        }
        console.log(first + "'s new role: " + role);
    }
    if(builders.length > config.targetCreeps.builder){
        let first = builders[0].name;
        console.log('too many builders, changing: ' + first);
        if(harvesters.length < config.targetCreeps.harvester){
            taskEdit.changeRole(first, "harvester");
            role = "harvester";
        }
        if(upgraders.length < config.targetCreeps.upgrader){
            taskEdit.changeRole(first, "upgrader");
            role = "upgrader";
        }
        console.log(first + "'s new role: " + role);
    }
};


var popControl = {
    run: function(){
        checkHarvester();
        checkUpgrader();
        checkBuilder();
        checkBalance();
    }
};

module.exports = popControl;
