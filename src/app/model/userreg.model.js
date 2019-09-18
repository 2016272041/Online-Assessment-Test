module.exports = (sequelize, Sequelize) => {
    const Userreg = sequelize.define('userreg', {
        name: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
    return Userreg;
}