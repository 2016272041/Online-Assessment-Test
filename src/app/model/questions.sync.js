//questions sync table initilization//
var Questions = sequelize.define("Questions", {

    // questions datatype initilization//
    ques_id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    questions1: DataTypes.STRING,
    questions2: DataTypes.STRING,
    questions3: DataTypes.STRING,
    created_by: DataTypes.DATE,
    updated_by: DataTypes.DATE,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING,
    answers: DataTypes.STRING
}, {
    classMethods: {
        associate: function(models) {
            
            Questions.hasMany(models.id,{primaryKey: {fieldName:'ques_id'}});
            Questions.belongsTo(models.Questions1, { foreignKey: {fieldName:'questions1'}});
            Questions.belongsTo(models.Questions2, { foreignKey: {fieldName:'questions2'}});
            Questions.belongsTo(models.Questions3, { foreignKey: {fieldName:'questions3'}});
            Questions.belongsTo(models.Createdat, { foreignKey: {fieldName:'createdat'}});
            Questions.belongsTo(models.Updatedat, { foreignKey: {fieldName:'updatedat'}});
            Questions.belongsTo(models.Option1, { foreignKey: {fieldName:'option1'}});
            Questions.belongsTo(models.Option2, { foreignKey: {fieldName:'option2'}});
            Questions.belongsTo(models.Option3, { foreignKey: {fieldName:'option3'}});
            Questions.belongsTo(models.Option4, { foreignKey: {fieldName:'option4'}});
            Questions.belongsTo(models.Answers, { foreignKey: {fieldName: 'answers'}});
        }
    },
    tableName: 'questions',
    createdAt: true,
    updatedAt: true
});
return Questions;