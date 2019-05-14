// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM " + table + ";"
        console.log(query)
        connection.query(query, function (err, res) {
            if (err) { throw err }
            cb(res)
        })
    },
    insertOne: function (table, colArray, valArray, cb) {
        var cols = colArray.join(', ')
        var vals = valArray.join(', ')
        var query = "INSERT INTO " + table + " (" + cols + ") VALUES (" + vals + " )" + ";"
        console.log(query)
        connection.query(query, function (err, res) {
            if (err) { throw err }
            cb(res)
        })
    },
    updateOne: function(table, setCol, setVal, whereCol, whereVal, cb ) {
        var query = "UPDATE " + table + " SET " + setCol + " = " + setVal + " WHERE " + whereCol +" =" + whereVal + ";"
        console.log(query)
        connection.query(query, function (err, res) {
            if (err) { throw err }
            cb(res)
        })
    }
}

module.exports = orm;