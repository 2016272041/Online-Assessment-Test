var Fileupload = sequelize.define("Fileupload", {
    // fileupload datatype initilization//
    type: DataTypes.STRING,
    type: {
        type: DataTypes.STRING,
        primaryKey: false,
        foreignKey: false,
        allowNull: false
    },
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    data: DataTypes.VARBINARY
}, {
    classMethods: {
        associate: function(models) {
            Fileupload.hasMany(models.type, {fieldname: 'type'});
            Fileupload.belongsTo(models.name, {fieldname: 'name'});
            Fileupload.belongsTo(models.data, {fieldname: 'data'});
        }
    },
    tablename: 'fileupload',
    createdAt: true,
    updatedAt: true
});

return Fileupload;