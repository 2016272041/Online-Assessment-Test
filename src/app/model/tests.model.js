modulel.exports = (sequelize, Sequelize) => {
    const Tests = sequelize.define('tests', {
        testid: {
            type: Sequelize.INTEGER
        },
        testname: {
            type: Sequelize.STRING
        },
        testcreator: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    });

    return Tests;
} 