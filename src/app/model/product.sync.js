import { DataTypes } from "sequelize/types";

//product sync table initilization//
var Product = sequelize.define("product", {

    // product datatype initilization //
    id: DataTypes.STRING,
    type: {
        type: DataTypes.NUMBER,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    size: DataTypes.DOUBLERANGE,
    progress: DataTypes.NUMBER,
    status: DataTypes.STRING,
    action: DataTypes.PROGRESSEVENT
}, {
    classMethods: {
        associate: function(models) {

            Product.hasmany(models.id,{primaryKey: {fieldName: 'id'}});
            Product.belongsTo(models.name, {foreignKey:{fieldName:'name'}});
            Product.belongsTo(models.size, {foreignKey:{fieldName: 'size'}});
            Product.belongsTo(models.progress, {foreignKey:{fieldName: 'progress'}});
            Product.belongsTo(models.status, {foreignKey: {fieldName: 'status'}});
            Product.belongsTo(models.status, {foreignKey: {fieldName: 'action'}});
        }
    },
    tableName: 'product',
    createdAt: false,
    updatedAt: false
});
return Product;