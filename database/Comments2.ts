// // const DataTypes = require('sequelize')
// const database = require('../database/db.ts')

// const Comments = database.define('comment', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//     },
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     owner: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     corp_message: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     up_votes: DataTypes.INTEGER,
//     down_votes: DataTypes.INTEGER,
//     situacao: DataTypes.STRING,
// });

// module.exports = Comments