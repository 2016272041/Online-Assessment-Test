var questions = Sequelize.define("questions", {
    ID: {
        type: sequelize.INTEGER,
        unique: true,
        autoIncrement: true
    },

    Questions1: {
        type: Sequelize.STRING
    },
    Questions2: {
        type: Sequelize.STRING
    },
    Questions3: {
        type: Sequelize.STRING
    },
    createDate: {
        type: Sequelize.DATE
    },
    updateDate: {
        type: Sequelize.DATE
    },

        tableName: 'questions',
        timestamps: 'false',
        freezetableName: true

});