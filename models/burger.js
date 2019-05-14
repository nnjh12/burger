var orm = require("../config/orm")

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        })
    },
    insertOne: function(colArray,valArray,cb) {
        orm.insertOne("burgers",colArray,valArray,function(res){
            cb(res)
        })
    },
    updateOne: function(setCol,setVal,whereCol,whereVal,cb){
        orm.updateOne("burgers",setCol,setVal,whereCol,whereVal,function(res){
            cb(res)
        })
    }
}

module.exports = burger;
