import { DataTypes } from "sequelize/types";
var Answers = sequelize.define("Answers", {
    //answers datatype initilization//
    ans_id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: True,
        foreignKey: True,
        allowNull: False
    },
    id: DataTypes.INTEGER,
    answers: DataTypes.STRING,
}, {
    classMethods: {
        associate: function(models) {
            Answers.hasMany(models.id, { primaryKey: {fieldName:'id'}});
            Answers.belongsTo(models.answers, {foreignKey: {fieldName:'answers'}});
        }
    },
    tableName: 'answers',
    createdAt: true,
    updatedAt: true
});
return Answers;