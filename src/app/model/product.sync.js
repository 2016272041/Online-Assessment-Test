//product sync table initilization//
var Product = sequelize.define("product", {

    id: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
    },
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    progress: DataTypes.STRING,
    status: DataTypes.STRING,
    action: DataTypes.STRING
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