module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        name: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.DOUBLERANGE
        },
        progress: {
            type: Sequelize.NUMBER
        },
        status: {
            type: Sequelize.STRING
        },
        action: {
            type: Sequelize.PROGRESSEVENT
        }
    });
    return Product;
}