module.exports = (sequelize, Sequelize) => {
    const Randomizers = sequelize.define('randomizers', {
        userid: {
            type: Sequelize.NUMBER
        },
        name: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        testsid: {
            type: Sequelize.NUMBER
        },
        questions: {
            type: Sequelize.STRING
        }
    });
    return Randomizers;
}