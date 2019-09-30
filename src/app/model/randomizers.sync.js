import { sequelize } from "../config/db.config";
import { DataTypes } from "sequelize/types";

var Randomizers = sequelize.define("randomizers", {
    users_id: DataTypes.STRING,
    type: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    userid: DataTypes.NUMBER,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    testsid: DataTypes.NUMBER,
    questions: DataTypes.STRING
}, {
    classMethods: {
        associate: function(models) {
            Randomizers.hasMany(models.userid, {primaryKey: { fieldName: 'userid'}});
            Randomizers.belongsTo(models.name, {foreignKey: { fieldName: 'name' }});
            Randomizers.belongsTo(models.username, {foreignKey: {fieldName: 'username'}});
            Randomizers.belongsTo(models.email, {foreignKey: { fieldName: 'email'}});
            Randomizers.belongsTo(models.testsid, {foreignKey: { fieldName: 'testsid' }});
            Randomizers.belongsTo(models.questions, {foreignKey: { fieldName: 'questions' }});
        }
    },
    tableName: 'randomizers',
    createsAt: true,
    updatedAt: true
});
return Randomizers;