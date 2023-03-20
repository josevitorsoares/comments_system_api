const Sequelize = require('sequelize');
const comments = require('../src/models/Comments.ts')

const sequelize = new Sequelize('Comments', 'postgres', 'root', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
});
comments.init(sequelize);

module.exports = sequelize;