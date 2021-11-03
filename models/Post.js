const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection')

class Post extends Model{}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:  {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post