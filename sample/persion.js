var mongoose=require('mongoose');
var personSchema=mongoose.Schema({
    name:String,
    fatherName:String,
    number:String,
    image:String
});
var persons=module.exports=mongoose.model('persons',personSchema);

module.exports.addPerson=function(person,callback){
    persons.create(person,callback);
};

module.exports.getPerson=function(callback){
    persons.find(callback);
};

module.exports.getPersonById=function(id,callback){
    persons.findById(id,callback);
};

module.exports.update=function(id,person,callback){
    var query={_id:id};
    var update={
        name:person.name

    };
    persons.findOneAndUpdate(query,update,callback);
};

module.exports.deletePerson=function(id,callback){
    var query={_id:id};

    persons.remove(query,callback);
};