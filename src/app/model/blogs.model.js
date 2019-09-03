module.exports = (sequelize, Sequelize) => {
    const Blogs = sequelize.define('blogs', {

        title: {
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
        },
        description: {
            type: Sequelize.STRING
        }
    });
    return Blogs;
}