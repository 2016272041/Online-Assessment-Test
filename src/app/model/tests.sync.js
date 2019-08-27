//tests sync table initilization//
var Tests = sequelize.define("tests", {
    //tests datatype initilization//
    test_id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    testname: DataTypes.STRING,
    testcreator: DataTypes.STRING,
    created_by: DataTypes.DATE,
    updated_by: DataTypes.DATE
}, {
    classMethods: {
        associate: function(models) {
            Tests.hasMany(models.id, {primarykey: {fieldName: 'id'}});
            Tests.belongsTo(models.testname, {foreignKey: {fieldName: 'testname'}});
            Tests.belongsTo(models.testcreator, {foreignKey: {fieldName: 'testcreator'}});
            Tests.belongsTo(models.createdAt, { foreignKey: {fieldName:'createdAt'}});
            Tests.belongsTo(models.updatedAt, { foreignKey: {fieldName:'updatedAt'}});            
        }
    },
    tableName: 'tests',
    createdAt: true,
    updatedAt: true
});
return Tests;