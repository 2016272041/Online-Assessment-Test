module.exports = (sequelize, Sequelize) => {
	const Questions = sequelize.define('questions', {
	  questions1: {
			type: Sequelize.STRING
	  },
	  questions2: {
			type: Sequelize.STRING
	  },
	  questions3: {
		    type: Sequelize.STRING
	  }
	});
	
	return Questions;
}