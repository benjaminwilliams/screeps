
var taskEdit = {
    rename : function(oldName, newName){
       var creep = Game.creeps[oldName];
        if(creep.name){
            creep.name = newName;
        }
        else {
            console.log('error, no one named: '+ name)
        }
    },
    changeRole: function(name, role){
        if(Game.creeps[name]){
            Game.creeps[name].memory = {
                role: role
            }
        }
        else {
            console.log('error, no one named: '+ name)
        }
    }
};

module.exports = taskEdit;
