//registration sync table initilization//
var Registrations = sequelize.define("Registrations", {

    //  datatype initilization//
    id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    regid: DataTypes.NUMBER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE

}, {
    classMethods: {
        associate: function(models) {
            Registrations.hasMany(models.id, {primaryKey: {fieldName: 'id'}});
            Registrations.belongsTo(models.Regid, {foreignKey: {fieldName:'regid'}});
            Registrations.belongsTo(models.Username, { foreignKey: {fieldName:'username'}});
            Registrations.belongsTo(models.Password, { foreignKey: {fieldName:'password'}});
            Registrations.belongsTo(models.Firstname, { foreignKey: {fieldName:'firstname'}});
            Registrations.belongsTo(models.Lastname, { foreignKey: {fieldName:'lastname'}});
            Registrations.belongsTo(models.createdAt, { foreignKey: {fieldName: 'createdAt'}});
            Registrations.belongsTo(models.updatedAt, { foreignKey: {fieldName: 'updatedAt'}});
        }
    },
    tableName: 'registrations',
    createdAt: true,
    updatedAt: true
});
return Registrations;