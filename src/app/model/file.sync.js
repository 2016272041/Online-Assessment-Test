import { sequelize } from "../config/db.config";
import { DataTypes } from "sequelize/types";

//file sync table initilization//
var File =  sequelize.define("File", {
    // File datatype initilization//
    id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignkey: false,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    data: DataTypes.BLOB('LONG')
},  {
    classMethods: {
        associate: function(models) {
            File.hasMany(models.id, {primaryKey: {fieldName: 'id'}});
            File.belongsTo(models.type, {fieldName: 'type'});
            File.belongsTo(models.type, {fieldName: 'name'});
            File.belongsTo(models.type, {fieldName: 'data'});            
        }
    },
    tableName: 'files',
    createdAt: true,
    updatedAt: true
});

return File;