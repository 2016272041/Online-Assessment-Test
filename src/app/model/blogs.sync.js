import { DataTypes } from "sequelize/types";

var Blogs = sequelize.define("Blogs",{

    //blogs datatype initilization//
    id: DataTypes.NUMBER,
    type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    title: DataTypes.STRING,
    is_featured: DataTypes.STRING,
    is_active: DataTypes.STRING,
    image: DataTypes.BLOB,
    description: DataTypes.STRING
}, {
    classMethods: {
        associate: function(models) {
            Blogs.hasMany(models.id,{primaryKey: {fieldName:'id'}});
            Blogs.belongsTo(models.title,{foreignKey: {fieldName:'title'}});
            Blogs.belongsTo(models.is_featured,{foreignKey: {fieldName: 'is_featured'}});
            Blogs.belongsTo(models.is_active,{foreignKey: {fieldName: 'image'}});
            Blogs.belongsTo(models.description,{foreignKey: {fieldName: 'description'}});            
        }
    },
    tableName: 'blogs',
    createdAt: true,
    updatedAt: true
});
return Blogs;