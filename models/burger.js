var orm = require('../config/orm.js');

var burger = {

  selectWhere: function(burgerName,callback){
    orm.selectWhere('burgers','burger_name' ,burgerName,function(returnData){
      callback(returnData)
    }); 
  },

  insertOne: function(column,name,callback){
    orm.insertOne('burgers',column,name, function(returnData){
      callback(returnData);
    });
  },

  selectAll: function(callback){
    orm.selectAll('burgers',function(returnData){
      callback(returnData);
    });
  },

  updateOne: function(table,column,id,callback){
    orm.updateOne('burgers',column, id,function(returnData){
      callback(returnData);
    })
  },

  deleteOne: function(table,id,callback){
    orm.deleteOne('burgers',id,function(returnData){
      callback(returnData);
    })
  }

}

module.exports = burger;