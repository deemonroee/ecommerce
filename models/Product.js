// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}
Product.init (
  {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    product_name:{
      type:DataTypes.STRING,
      allowNull: false
    },
    stock:{
      type:DataTypes.INTEGER,
      defaultValue:10,
      allowNull:false
    },
    price:{
      type:DataTypes.DECIMAL,
      allowNull:false
    },
    category_id:{
      type:DataTypes.INTEGER,
      references:{
        model:"category",
        key:"id"
  }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
  )

module.exports = Product;
