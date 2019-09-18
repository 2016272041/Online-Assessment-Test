var Userreg = sequelize.define("Userreg", {
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
    password: DataTypes.STRING
}, {
    classMethods: {
        associate: function(models)
        {
            Userreg.hasMany(models.userid, {primaryKey: {fieldName: 'userid'}});
            Userreg.belongsTo(models.name, {foreignKey: {fieldName: 'name'}});
            Userreg.belongsTo(models.username, {foreignKey: {fieldName: 'username'}});
            Userreg.belongsTo(models.email, {foreignKey: {fieldName: 'email'}});
            Userreg.belongsTo(models.password, {foreignKey: {fieldName: 'password'}});
        }
    },
    tableName: 'userreg',
    createdAt: true,
    updatedAt: true
});
return Userreg;