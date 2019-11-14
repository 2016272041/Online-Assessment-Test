var Mcqs = sequelize.define("mcqs", {
    mcqs_id: DataTypes.STRING,
    type: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    questions: DataTypes.STRING,
    questionstypeid: DataTypes.NUMBER,
    mcqoption: DataTypes.STRING,
    answers: DataTypes.STRING,
    answered: DataTypes.STRING
}, {
    classMethods: {
        associate: function(models) {
            Mcqs.hasMany(models.id, {primaryKey: {fieldName: 'id'}});
            Mcqs.belongsTo(models.questions, {foreignKey: {fieldName: 'questions'}});
            Mcqs.belongsTo(models.questionstypeid, {foreignKey: {fieldName: 'questionstypeid'}});
            Mcqs.belongsTo(models.mcqoption, {foreignKey: {fieldName: 'mcqoption'}});
            Mcqs.belongsTo(models.answers, {foreignKey: {fieldName: 'answers'}});
            Mcqs.belongsTo(models.answered, {foreignKey: {fieldName: 'answered'}});
        }
    },
    tableName: 'mcqs',
    createdAt: true,
    updatedAt: true
});
return Mcqs;