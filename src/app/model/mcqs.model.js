module.exports = (sequelize, Sequelize) => {
    const Mcqs = sequelize.define('mcqs',{
        questions: {
            type: Sequelize.STRING
        },
        questionstypeId: {
            type: Sequelize.NUMBER
        },
        mcqoption: {
            type: Sequelize.STRING
        },
        answers: {
            type: Sequelize.STRING
        },
        answered: {
            type: Sequelize.BOOLEAN
        }
    });
    return Mcqs;
}