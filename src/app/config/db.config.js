const env = require('./env.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.questions = require('../model/questions.model.js')(sequelize, Sequelize);
db.tests = require('../model/tests.model.js')(sequelize, Sequelize);
db.companies = require('../model/companies.model.js')(sequelize, Sequelize);
db.registrations = require('../model/registrations.model.js')(sequelize, Sequelize);
db.file = require('../model/file.model.js')(sequelize, Sequelize);
db.blogs = require('../model/blogs.model.js')(sequelize, Sequelize);
db.answers = require('../model/answers.model.js')(sequelize, Sequelize);
db.mcqs = require('../model/mcqs.model.js')(sequelize, Sequelize);
db.userregs = require('../model/userregs.model.js')(sequelize, Sequelize);
db.assigners = require('../model/assigners.model.js')(sequelize, Sequelize);
db.randomizers = require('../model/randomizers.model.js')(sequelize, Sequelize);

module.exports = db;