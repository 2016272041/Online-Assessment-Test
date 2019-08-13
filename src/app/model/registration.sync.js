//registration sync table initilization//
var Registration = sequelize.define("Registration", {

    //  datatype initilization//
    regid: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: false,
        allowNull: false
    },
    regid: DataTypes.NUMBER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING

}, {
    classMethods: {
        associate: function(models) {
            
            Registration.hasMany(models.Regid,{primaryKey: {fieldName:'regid'}});
            Registration.belongsTo(models.Username, { foreignKey: {fieldName:'username'}});
            Registration.belongsTo(models.Password, { foreignKey: {fieldName:'password'}});
            Registration.belongsTo(models.Firstname, { foreignKey: {fieldName:'firstname'}});
            Registration.belongsTo(models.Lastname, { foreignKey: {fieldName:'lastname'}});
        }
    },
    tableName: 'registration',
    createdAt: false,
    updatedAt: false
});
return Registration;