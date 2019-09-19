var Userregs = sequelize.define("Userregs", {
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
            Userregs.hasMany(models.userid, {primaryKey: {fieldName: 'userid'}});
            Userregs.belongsTo(models.name, {foreignKey: {fieldName: 'name'}});
            Userregs.belongsTo(models.username, {foreignKey: {fieldName: 'username'}});
            Userregs.belongsTo(models.email, {foreignKey: {fieldName: 'email'}});
            Userregs.belongsTo(models.password, {foreignKey: {fieldName: 'password'}});
        }
    },
    tableName: 'userregs',
    createdAt: true,
    updatedAt: true
});
return Userregs;