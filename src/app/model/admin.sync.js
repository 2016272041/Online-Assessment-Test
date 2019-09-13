import { DataTypes } from "sequelize/types";

// Admin sync table initilization//
var Admin = sequelize.define("Admin", {
    //Admin datatype initilization//
    Admin_id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    questionsname: DataTypes.STRING,
    firstset: DataTypes.STRING,
    secondset: DataTypes.STRING,
    thirdset: DataTypes.STRING,
    fourthset: DataTypes.STRING,
    setfirstopts: DataTypes.STRING,
    setsecondopts: DataTypes.STRING,
    setthirdopts: DataTypes.STRING,
    setfourthopts: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    classMethods: {
        associate: function(models)
        {
            Admin.hasMany(models.id, {primaryKey: {fieldName: 'id'}});
            Admin.belongsTo(models.questionsname, {foreignKey: {fieldName: 'questionsName'}});
            Admin.belongsTo(models.firstset, {foreignKey: {fieldName: 'firstset'}});
            Admin.belongsTo(models.secondset, {foreignKey: {fieldName:'secondset'}});
            Admin.belongsTo(models.thirdset, {foreignKey: {fieldName: 'thirdset'}});
            Admin.belongsTo(models.fourthset, {foreignKey: {fieldName: 'fourthset'}});
            Admin.belongsTo(models.setfirstopts, {foreignKey: {fieldName: 'setfirstopts'}});
            Admin.belongsTo(models.setsecondopts, {foreignKey: {fieldName: 'setsecondopts'}});
            Admin.belongsTo(models.setthirdopts, {foreignKey: {fieldName: 'setthirdopts'}});
            Admin.belongsTo(models.setfourthopts, {foreignKey: {fieldName: 'setfourthopts'}});
            Admin.belongsTo(models.createdAt, {foreignKey: {fieldName: 'createdAt'}});
            Admin.belongsTo(models.updatedAt, {foreignKey: {fieldName: 'updatedAt'}});   
        }
    }
});
return Admin;