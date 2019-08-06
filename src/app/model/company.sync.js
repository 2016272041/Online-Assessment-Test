//company sync table initilization//
var Company = sequelize.define("Company", {

    // company datatype initilization//
    companyid: DataTypes.INTEGER,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    companyname: DataTypes.STRING,
    testname: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

}, {
    classMethods: {
        associate: function(models) {
            
            Questions.hasMany(models.Companyid,{primaryKey: {fieldName:'companyid'}});
            Questions.belongsTo(models.Companyname, { foreignKey: {fieldName:'companyname'}});
            Questions.belongsTo(models.Testname, { foreignKey: {fieldName:'testname'}});
            Questions.belongsTo(models.Testdate, { foreignKey: {fieldName:'testdate'}});
            Questions.belongsTo(models.Createdat, { foreignKey: {fieldName:'createdat'}});
            Questions.belongsTo(models.Updatedat, { foreignKey: {fieldName:'updatedat'}});
        }
    },
    tableName: 'company',
    createdAt: false,
    updatedAt: false
});
return Company;