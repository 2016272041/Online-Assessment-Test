module.exports = (sequelize, Sequelize) => {
    const Userregs = sequelize.define('userregs', {
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
    return Userregs;
}