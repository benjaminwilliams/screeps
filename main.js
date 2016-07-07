var config = require('config');

var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');

var taskEdit = require('task.edit');
var taskCreate = require('task.create');
var taskPopControl = require('task.popControl');

//taskCreate.builder('steve');
//taskCreate.harvester('glen');

//taskEdit.changeRole('Nathasaassniel', 'harvester');

module.exports.loop = function () {

    // Always place this memory cleaning code at the very top of your main loop!

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    taskPopControl.run();



    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder'){
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
    
};

test = function(){
    console.log('rkjkljj');
};

info = {
    listCreeps: function () {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');


        console.log('Harvesters: ' + harvesters.length + " | target: " + config.targetCreeps.harvester);
        console.log('upgraders: ' + upgraders.length + " | target: " + config.targetCreeps.upgrader);
        console.log('builders: ' + builders.length + " | target: " + config.targetCreeps.builder);

    }
};