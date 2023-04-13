const { Model, DataTypes } = require('sequelize');

class Comments extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            title: DataTypes.STRING,
            owner: DataTypes.STRING,
            corp_message: DataTypes.STRING,
            up_votes: DataTypes.INTEGER,
            down_votes: DataTypes.INTEGER,
            situacao: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

export { Comments };