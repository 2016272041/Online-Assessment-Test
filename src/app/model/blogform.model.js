module.exports = (sequelize, Sequelize) => {
    const Blogform = sequelize.define('blogform', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        is_featured: {
            type: Sequelize.STRING
        },
        is_active: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB
        }
    });
    return Blogform
}