var taskCreate = require('task.create');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var taskEdit = require('task.edit');
var roleUpgrader = require('role.upgrader');

//taskCreate.builder('steve');
//taskCreate.harvester('glen');

//taskEdit.changeRole('steve', 'upgrader');

module.exports.loop = function () {

    // Always place this memory cleaning code at the very top of your main loop!

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    //var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    //console.log('Harvesters: ' + harvesters.length);
    //
    //if(harvesters.length < 2) {
    //    var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
    //    console.log('Spawning new harvester: ' + newName);
    //}



    for(var name in Game.creeps) {
        console.log(name);
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