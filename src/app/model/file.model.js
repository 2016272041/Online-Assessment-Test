module.exports = (sequelize, Sequelize) => {
    const Files = sequelize.define('files', {
        type: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING          
        },
        data: {
            type: Sequelize.BLOB('long')
        }  
    });
    return Files
}