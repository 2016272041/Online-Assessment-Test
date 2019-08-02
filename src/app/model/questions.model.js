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
	  },
	  createdAt: {
		  type: Sequelize.DATE
	  },
	  updatedAt: {
		  type: Sequelize.DATE
	  }
	});
	
	return Questions;
}