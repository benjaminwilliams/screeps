
var taskEdit = {
    rename : function(oldName, newName){
       var creep = Game.creeps[oldName];
       creep.name = newName;
    },
    changeRole: function(name, role){
        Game.creeps[name].memory = {
            role: role
        }
    }
};

module.exports = taskEdit;
