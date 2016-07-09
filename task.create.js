/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('task.create');
 * mod.thing == 'a thing'; // true
 */

var taskCreate = {
    builder : function(){
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    },
    harvester : function(){
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    },
    upgrader: function () {
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE], undefined, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);

    }
};

module.exports = taskCreate;