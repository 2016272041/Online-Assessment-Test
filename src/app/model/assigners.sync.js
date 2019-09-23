//assigners sync table initilization//
var Assigners = sequelize.define("Assigners", {

    // assigners datatype initilization//
    users_id: DataTypes.NUMBER,
    type: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    userid: DataTypes.NUMBER,
    username: DataTypes.STRING,
    testid: DataTypes.NUMBER,
    testname: DataTypes.STRING,
    testdate: DataTypes.DATE
}, {
    classMethods: {
        associate: function(models)
        {
            Assigners.hasMany(models.userid, {primaryKey: {fieldName: 'userid'}});
            Assigners.belongsTo(models.username, {foreignKey: {fieldName: 'username'}});
            Assigners.belongsTo(models.testid, {foreignKey: {fieldName: 'testid'}});
            Assigners.belongsTo(modles.testname, {foreignKey: {fieldName: 'testname'}});
            Assigners.belongsTo(models.testdate, {foreignKey: {fieldName: 'testdate'}});
        }
    },
    tableName: 'assigners',
    createdAt: true,
    updatedAt: true
});
return Assigners;