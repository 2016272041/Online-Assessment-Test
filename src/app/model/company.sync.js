//company sync table initilization//
var Company = sequelize.define("Company", {

    // company datatype initilization//
    companyid: DataTypes.INTEGER,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    companyid: DataTypes.INTEGER,
    companyname: DataTypes.STRING,
    testname: DataTypes.STRING,
    testdate: DataTypes.DATE,
}, {
    classMethods: {
        associate: function(models) {
            Company.hasMany(models.companyid, {primaryKey: {fieldName:'companyid'}});
            Company.belongsTo(models.companyname, {foreignKey: {fieldName:'companyname'}});
            Company.belongsTo(models.testname, {foreignKey: {fieldName:'testname'}});
            Company.belongsTo(models.testdate, {foreignKey: {fieldName: 'testdate'}});
        }
    },
    tableName: 'questions',
    createdAt: false,
    updatedAt: false
});
return Company;