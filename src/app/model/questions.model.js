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
	  questions4: {
			type: Sequelize.STRING
	  },
	  questions5: {
			type: Sequelize.STRING
	  },
	  questions6: {
			type: Sequelize.STRING
	  },
	  questions7: {
			type: Sequelize.STRING
	  },
	  questions8: {
			type: Sequelize.STRING
	  },
	  questions9: {
			type: Sequelize.STRING
	  },
	  questions10: {
			type: Sequelize.STRING
	  },
	  createdAt: {
		  type: Sequelize.DATE
	  },
	  updatedAt: {
		  type: Sequelize.DATE
	  },
	  option1: {
		  type: Sequelize.STRING
	  },
	  option2: {
		  type: Sequelize.STRING
	  },
	  option3: {
		  type: Sequelize.STRING
	  },
	  option4: {
		  type: Sequelize.STRING
	  }
	});
	
	return Questions;
}