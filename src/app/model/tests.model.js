module.exports = (sequelize, Sequelize) => {
    const Tests = sequelize.define('tests', {
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