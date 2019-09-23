module.exports = (sequelize, Sequelize) => {
    const Assigners = sequelize.define('assigners', {
        username: {
            type: Sequelize.STRING
        },
        testid: {
            type: Sequelize.NUMBER
        },
        testname: {
            type: Sequelize.STRING
        },
        testdate: {
            type: Sequelize.DATE
        }
    });
    return Assigners;
}