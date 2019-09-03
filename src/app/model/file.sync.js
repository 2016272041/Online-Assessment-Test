//file sync table initilization//
var Files =  sequelize.define("Files", {
    // File datatype initilization//
    id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignkey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    data: DataTypes.BLOB('LONG')
},  {
    classMethods: {
        associate: function(models) {
            Files.hasMany(models.id, {primaryKey: {fieldName: 'id'}});
            Files.belongsTo(models.type, {fieldName: 'type'});
            Files.belongsTo(models.type, {fieldName: 'name'});
            Files.belongsTo(models.type, {fieldName: 'data'});            
        }
    },
    tableName: 'files',
    createdAt: true,
    updatedAt: true
});

return Files;