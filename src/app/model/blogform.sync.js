//blogform sync table initilization//
var Blogform = sequelize.define("Blogform", {
    //blogform datatypes initilization//
    id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    is_featured: DataTypes.STRING,
    is_active: DataTypes.STRING,
    image: DataTypes.BLOB

}, {
    classMethods: {
        associate: function(models) {
            Blogform.hasMany(models.id,{primaryKey: {fieldName:'id'}});
            Blogform.belongsTo(models.title, {foreignKey: {fieldName: 'title'}});
            Blogform.belongsTo(models.description, {foreignKey: {fieldName: 'decription'}});
            Blogform.belongsTo(models.is_featured, {foreignKey: {fieldName: 'is_featured'}});
            Blogform.belongsTo(models.is_active, {foreignKey: {fieldName: 'is_active'}});
            Blogform.belongsTo(models.image, {foreignKey: {fieldName:'image'}});
        }
    },
    tableName: 'blog',
    createdAt: false,
    updatedAt: false

});
return Blogform