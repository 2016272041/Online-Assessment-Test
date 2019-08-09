
//companies sync table initilization//
var Companies = sequelize.define("Companies", {

    // companies datatype initilization//
    companiesid: DataTypes.INTEGER,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    companiesid: DataTypes.INTEGER,
    companiesname: DataTypes.STRING,
    testname: DataTypes.STRING,
    testdate: DataTypes.DATE,
    created_by: DataTypes.DATE,
    updated_by: DataTypes.DATE
}, {
    classMethods: {
        associate: function(models) {
            Company.hasMany(models.companiesid, {primaryKey: {fieldName:'companiesid'}});
            Company.belongsTo(models.companiesname, {foreignKey: {fieldName:'companiesname'}});
            Company.belongsTo(models.testname, {foreignKey: {fieldName:'testname'}});
            Company.belongsTo(models.testdate, {foreignKey: {fieldName: 'testdate'}});
            Company.belongsTo(models.createdAt, {foreignKey: {fieldName: 'createdat'}});
            Company.belongsTo(models.updatedAt, {foreignKey: {fieldName: 'updatedat'}});
        }
    },
    tableName: 'companies',
    createdAt: false,
    updatedAt: false
});
return Companies;