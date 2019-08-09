import { DataTypes } from "sequelize/types";

//tests sync table initilization//
var Tests = sequelize.define("tests", {
    //tests datatype initilization//
    testid: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    testid: DataTypes.NUMBER,
    testname: DataTypes.STRING,
    testcreator: DataTypes.STRING,
    created_by: DataTypes.DATE,
    updated_by: DataTypes.DATE
}, {
    classMethods: {
        associate: function(models) {
            Tests.hasMany(models.Testid, {primarykey: {fieldName: 'testid'}});
            Tests.belongsTo(models.Testname, {foreignKey: {fieldName: 'testname'}});
            Tests.belongsTo(models.testcreator, {foreignKey: {fieldName: 'testcreator'}});
            Tests.belongsTo(models.Createdat, { foreignKey: {fieldName:'createdat'}});
            Tests.belongsTo(models.Updatedat, { foreignKey: {fieldName:'updatedat'}});            
        }
    },
    tableName: 'tests',
    createdAt: false,
    updatedAt: false
});
return Tests;