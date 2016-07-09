var config = require('config');
var taskEdit = require('task.edit');
var taskCreate = require('task.create');

// lower number = higher priority
// min number defined by cost to produce
var priority = {
    har: 250,
    upg: 260,
    bul: 270,
    rep: 265
};

let checkHarvester = function(){
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    if(harvesters.length < config.targetCreeps.harvester && Game.spawns.Spawn1.energy > priority.har) {
        taskCreate.harvester();
    }
};

let checkUpgrader = function(){
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    if(upgraders.length < config.targetCreeps.upgrader && Game.spawns.Spawn1.energy > priority.upg) {
        taskCreate.upgrader();
    }
};

let checkBuilder = function(){
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    if(builders.length < config.targetCreeps.builder && Game.spawns.Spawn1.energy > priority.bul) {
       taskCreate.builder();
    }
};

let checkRepairer = function(){
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    if(repairers.length < config.targetCreeps.builder && Game.spawns.Spawn1.energy > priority.rep) {
        taskCreate.repairer();
    }
};

let checkBalance = function(){
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    var name = "";
    let role = "none";
    var _checkUpgrader = function(name){
        if(upgraders.length < config.targetCreeps.upgrader){
            taskEdit.changeRole(name, "upgrader");
            role = "upgrader";
        }
    };
    var _checkBuilder = function(name){
        if(builders.length < config.targetCreeps.builder){
            taskEdit.changeRole(name, "builder");
            role = "builder";
        }
    };
    var _checkHarvester = function(name){
        if(harvesters.length < config.targetCreeps.harvester){
            taskEdit.changeRole(name, "harvester");
            role = "harvester";
        }
    };
    var _checkRepairer = function(name){
        if(repairers.length < config.targetCreeps.repairer){
            taskEdit.changeRole(name, "repairer");
            role = "repairer";
        }
    };
    var _alertConsole = function(name){
        console.log('too many harvesters, changing: ' + name);
        console.log(name + "'s new role: " + role);
    };

    if(harvesters.length > config.targetCreeps.harvester){
        name = harvesters[0].name;
        _checkUpgrader(name);
        _checkBuilder(name);
        _checkRepairer(name);
        _alertConsole(name)
    }
    if(upgraders.length > config.targetCreeps.upgrader){
       name = upgraders[0].name;
        _checkHarvester(name);
        _checkBuilder(name);
        _checkRepairer(name);
        _alertConsole(name);
    }
    if(builders.length > config.targetCreeps.builder){
        name = builders[0].name;
        _checkHarvester(name);
        _checkUpgrader(name);
        _checkRepairer(name);
        _alertConsole(name);
    }
    if(repairers.length > config.targetCreeps.repairer){
        name = repairers[0].name;
        _checkHarvester(name);
        _checkUpgrader(name);
        _checkBuilder(name);
        _alertConsole(name);
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
