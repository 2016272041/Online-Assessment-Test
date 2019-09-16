var Role = sequelize.define("role", {
    //role datatypes initilization//
    roles_id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    name: DataTypes.STRING
}, {
    classMethods: {
        associate: function(models) {
            Role.hasMany(models.id, {primaryKey: {fieldName: 'id'}});
            Role.belongsTo(models.name, {foreignKey: {fieldName: 'name'}});
        }
    },
    tableName: 'roles',
    createdAt: true,
    updatedAt: true
});
return Role;