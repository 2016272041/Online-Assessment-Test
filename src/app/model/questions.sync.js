//questions sync table initilization//
var Questions = sequelize.define("Questions", {

    // questions datatype initilization//
    ques_id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    questions1: DataTypes.STRING,
    questions2: DataTypes.STRING,
    questions3: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER

}, {
    classMethods: {
        associate: function(models) {
            
            Questions.hasMany(models.Ques_id,{primaryKey: {fieldName:'ques_id'}});
            Questions.belongsTo(models.Questions1, { foreignKey: {fieldName:'questions1'}});
            Questions.belongsTo(models.Questions2, { foreignKey: {fieldName:'questions2'}});
            Questions.belongsTo(models.Questions3, { foreignKey: {fieldName:'questions3'}});
            Questions.belongsTo(models.Createdat, { foreignKey: {fieldName:'createdat'}});
            Questions.belongsTo(models.Updatedat, { foreignKey: {fieldName:'updatedat'}});
        }
    },
    tableName: 'questions',
    createdAt: false,
    updatedAt: false
});
return Questions;