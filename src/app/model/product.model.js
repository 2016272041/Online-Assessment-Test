module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        name: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.STRING
        },
        progress: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        action: {
            type: Sequelize.STRING
        }
    });
    return Product;
}