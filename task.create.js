/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('task.create');
 * mod.thing == 'a thing'; // true
 */

var taskCreate = {
    builder : function(name){
        Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], name,
            { role: 'builder' } 
        );
    },
    harvester : function(name){
        Game.spawns.Spawn1.createCreep( [WORK, CARRY, MOVE], name,
            { role: 'harvester' } 
        );
    }
};

module.exports = taskCreate;