module.exports = (sequelize, Sequelize) => {
    const Answers = sequelize.define('answers', {
        answers: {
            type: Sequelize.STRING
        }
    });
    return Answers;
}