import { DataTypes } from "sequelize/types";

// sendmail sync table initilization//
var Sendmail = sequelize.define("sendmail", {
    // sendmail datatypes initilization//
    id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
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
            Sendmail.belongsTo(models.createdAt, { foreignKey: {fieldName:'createdAt'}});
            Sendmail.belongsTo(models.updatedAt, { foreignKey: {fieldName:'updatedAt'}});
        }
    },
    tablename: 'sendmail',
    createdat: false,
    updatedat: false
});
return Sendmail;