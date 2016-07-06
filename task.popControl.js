var config = require('config');


var popControl = {
    harvester : function(){
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        //console.log('Harvesters: ' + harvesters.length);

        if(harvesters.length < config.targetCreeps.harvester) {
            var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }
    },
    upgrader : function(){
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        //console.log('upgraders: ' + upgraders.length);

        if(upgraders.length < config.targetCreeps.upgrader) {
            var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }
    },
    builder : function(){
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        //console.log('builder: ' + builders.length);

        if(builders.length < config.targetCreeps.builder) {
            var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }
    }

};

module.exports = popControl;
