
//companies sync table initilization//
var Companies = sequelize.define("Companies", {

    // companies datatype initilization//
    id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    companiesid: DataTypes.INTEGER,
    companiesname: DataTypes.STRING,
    testname: DataTypes.STRING,
    testdate: DataTypes.DATE,
    created_by: DataTypes.DATE,
    updated_by: DataTypes.DATE
}, {
    classMethods: {
        associate: function(models) 
        {
            Companies.hasMany(models.id, {primaryKey: {fieldName:'id'}});
            Companies.belongsTo(models.companiesid, {foreignKey: {fieldName:'companiesid'}});
            Companies.belongsTo(models.companiesname, {foreignKey: {fieldName:'companiesname'}});
            Companies.belongsTo(models.testname, {foreignKey: {fieldName:'testname'}});
            Companies.belongsTo(models.testdate, {foreignKey: {fieldName: 'testdate'}});
            Companies.belongsTo(models.createdAt, {foreignKey: {fieldName: 'createdat'}});
            Companies.belongsTo(models.updatedAt, {foreignKey: {fieldName: 'updatedat'}});
        }
    },
    tableName: 'companies',
    createdAt: false,
    updatedAt: false
});
return Companies;