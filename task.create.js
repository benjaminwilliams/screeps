/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('task.create');
 * mod.thing == 'a thing'; // true
 */



var taskCreate = {
    // See http://support.screeps.com/hc/en-us/articles/203013212-Creep
    // MOVE             |   50
    // WORK             |   100
    // CARRY            |   50
    // ATTACK           |   80
    // RANGED_ATTACK    |   150
    // HEAL             |   250
    // CLAIM            |   600
    // TOUGH            |   10


    builder : function(){
        var currentTime = new Date();
        var name = "Builder_" + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
        // current cost: 200
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], name, {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    },
    harvester : function(){
        var currentTime = new Date();
        var name = "Harvester_" + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
        // current cost: 250
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE], name, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    },
    upgrader: function () {
        var currentTime = new Date();
        var name = "Upgrader_" + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
        // current cost: 250
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE], name, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);

    },
    repairer: function () {
        var currentTime = new Date();
        var name = "Repairer_" + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
        // current cost: 200
        var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], name, {role: 'repairer'});
        console.log('Spawning new upgrader: ' + newName);

    },
    healer: function() {
        var currentTime = new Date();
        var name = "Healer_" + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
        // current cost: 400
        var newName = Game.spawns.Spawn1.createCreep([WORK,HEAL,MOVE], name, {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);


    }
};

module.exports = taskCreate;