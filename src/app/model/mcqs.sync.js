var Mcqs = sequelize.define("mcqs", {
    mcqs_id: DataTypes.STRING,
    type: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    answers: DataTypes.STRING
}, {
    classMethods: {
        associate: function(models) {
            Mcqs.hasMany(models.id, {primaryKey: {fieldName: 'id'}});
            Mcqs.belongsTo(models.answers, {foreignKey: {fieldName: 'answers'}});
        }
    },
    tableName: 'mcqs',
    createdAt: true,
    updatedAt: true
});
return Mcqs;