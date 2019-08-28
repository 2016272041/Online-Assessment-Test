module.exports = (sequelize, Sequelize) => {
    const Fileupload = sequelize.define('fileupload', {
        type: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        data: {
            type: Sequelize.VARBINARY
        }
    });

    return Fileupload;
}