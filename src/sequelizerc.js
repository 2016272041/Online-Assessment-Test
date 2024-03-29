var path = require('path');

module.exports ={
    'config': path.resolve('./', 'config/config.json'),
    'migrations-path': path.resolve('./','server/migrations'),
    'seeders-path': path.resolve('./', 'server/seeders'),
    'models-path': path.resolve('./','server/models')
};