//questions sync table initilization//
var Questions = sequelize.define("Questions", {

    // questions datatype initilization//
    ques_id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    questions1: DataTypes.STRING,
    questions2: DataTypes.STRING,
    questions3: DataTypes.STRING,
    created_by: DataTypes.DATE,
    updated_by: DataTypes.DATE

}, {
    classMethods: {
        associate: function(models) {
            
            Questions.hasMany(models.id,{primaryKey: {fieldName:'ques_id'}});
            Questions.belongsTo(models.Questions1, { foreignKey: {fieldName:'questions1'}});
            Questions.belongsTo(models.Questions2, { foreignKey: {fieldName:'questions2'}});
            Questions.belongsTo(models.Questions3, { foreignKey: {fieldName:'questions3'}});
            Questions.belongsTo(models.Createdat, { foreignKey: {fieldName:'createdat'}});
            Questions.belongsTo(models.Updatedat, { foreignKey: {fieldName:'updatedat'}});
        }
    },
    tableName: 'questions',
    createdAt: true,
    updatedAt: true
});
return Questions;