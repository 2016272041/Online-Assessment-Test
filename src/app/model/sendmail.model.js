module.exports = (sequelize, Sequelize) => {
    const Sendmail = sequelize.define('sendmail', {
        name: {
            type: Sequelize.STRING
        },

        email: {
            type: Sequelize.STRING
        },

        phone: {
            type: Sequelize.STRING
        },

        message: {
            type: Sequelize.STRING
        },
    });
    return Sendmail
}