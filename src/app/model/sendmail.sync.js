
var Sendmail = sequelize.define("Sendmail", {
    //sendmail datatype initilization//
    id: DataTypes.NUMBER,
    type: {
        type: DataTypes.NUMBER,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.NUMBER,
    message: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    classMethods: {
        associate: function(models) {
            Sendmail.hasMany(models.id,{primaryKey: {fieldName:'id'}});
            Sendmail.belongsTo(models.name, { foreignKey: {fieldName:'name'}});
            Sendmail.belongsTo(models.email, { foreignKey: {fieldName:'email'}});
            Sendmail.belongsTo(models.phone, { foreignKey: {fieldName:'phone'}});
            Sendmail.belongsTo(models.message, { foreignKey: {fieldName: 'message'}});
            Sendmail.belongsTo(models.createdAt, { foreignKey: {fieldName:'createdAt'}});
            Sendmail.belongsTo(models.updatedat, { foreignKey: {fieldName:'updatedAt'}});
        }
    },
    tableName: 'Sendmail',
    createdAt: true,
    updatedAt: true
});
return Sendmail;