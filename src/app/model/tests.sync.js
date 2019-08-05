//tests sync table initilization//
var Tests = sequelize.define("tests", {
    //tests datatype initilization//
    testid: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    testid: DataTypes.STRING,
    testname: DataTypes.STRING,
    testcreator: DataTypes.STRING
}, {
    classMethods: {
        associate: function(models) {
            Tests.hasMany(models.Testid,{primarykey: {fieldName: 'testid'}});
            Tests.belongsTo(models.Testname, {foreignKey: {fieldName: 'testname'}});
            Tests.belongsTo(models.testcreator, {foreignKey: {fieldName: 'testcreator'}});            
        }
    },
    tableName: 'tests',
    createdAt: false,
    updatedAt: false
});
return Tests;