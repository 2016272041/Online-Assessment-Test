module.exports = (sequelize, Sequelize) => {
    const Mcqs = sequelize.define('mcqs',{
        answers: {
            type: Sequelize.STRING
        }
    });
    return Mcqs;
}