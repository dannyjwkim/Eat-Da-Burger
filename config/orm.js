var connection = require('../config/connection.js');

var orm = {
  
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';

    connection.query(queryString, [valOfCol], function(err, result) {
      return result;
    });
  },

  selectAll: function (tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';

    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function (table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table + '(' + cols + ')' + "VALUES('" + [vals] + "')";

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(table, col_name, burger_id, cb) {
    var queryString = "UPDATE " + table + " SET " + col_name + "=1 " + "WHERE id=" + burger_id;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  deleteOne: function(table, burger_id, cb) {
    var queryString = "DELETE FROM " + table + " WHERE id = " + burger_id;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }

};

module.exports = orm;