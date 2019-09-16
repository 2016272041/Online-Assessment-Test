var User = sequelize.define("user", {
    //users datatype initilization//
    users_id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING 
}, {
    classMethods: {
        associate: function(models) {
            User.hasMany(models.id, {primaryKey: {fieldName: 'id'}});
            User.belongsTo(models.name, {foreignKey: {fieldName: 'name'}});
            User.belongsTo(models.username, {foreignKey: {fieldName: 'username'}});
            User.belongsTo(models.email, {foreignKey: {fieldName: 'email'}});
            User.belongsTo(models.password, {foreignKey: {fieldName: 'password'}});
        } 
    },
    tableName: 'users',
    createdAt: true,
    updatedAt: true
});
return User;
