module.exports = (sequlize, Sequelize) => {
    const Companies = sequlize.define('companies', {
        companiesname: {
            type: Sequelize.STRING
        },
        testname: {
            type: Sequelize.STRING
        },
        testdate: {
            type: Sequelize.DATE
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    });
    return Companies;
}