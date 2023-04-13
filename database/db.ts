const Sequelize = require('sequelize');
import { Comments } from "../src/models/Comments";

const sequelize = new Sequelize('Comments', 'postgres', 'root', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
});
Comments.init(sequelize);

module.exports = sequelize;