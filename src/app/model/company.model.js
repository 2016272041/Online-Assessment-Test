module.exports = (sequlize, Sequelize) => {
    const Company = sequlize.define('company', {
        companyid: {
            type: Sequelize.INTEGER
        },
        companyname: {
            type: Sequelize.STRING
        },
        testname: {
            type: Sequelize.STRING
        },
        testdate: {
            type: Sequelize.DATE
        }
    });
    return Company;
}