'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Questions', [{
        ques_id: '145',
        questions1: 'What is Lambda Functions',
        questions2: 'what is Entity Relationship Model Explain',
        questions3: 'Document Type Definition Model query'
      }],
      
      [{
        ques_id: '345',
        questions1: 'What is unexcepected token error',
        questions2: 'Why statement missing violated in java programs',
        questions3: 'Network state internet access protocol command'
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Questions', null, {});
  }
};
