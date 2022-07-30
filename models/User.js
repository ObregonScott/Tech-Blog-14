const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {

}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {

        },
        password: {

            validate: {
                len: [4]
            }

        }
    },
    {

    }
)

// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// User.belongsToMany(Post, {
//     through: Reaction,
//     as: 'reacted_posts',
//     foreignKey: 'user_id'
// });

// Post.belongsToMany(User, {
//     through: Reaction,
//     as: 'reacted_posts',
//     foreignKey: 'post_id'
// })

// Reaction.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Reaction.belongsTo(Post, {
//     foreignKey: 'post_id'
// });

// Reaction.belongsTo(Comment, {
//     foreignKey: 'comment_id'
// })

// Post.hasMany(Reaction, {
//     foreignKey: 'post_id'
// });

// Comment.hasMany(Reaction, {
//     foreignKey: 'comment_id'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Comment.belongsTo(Post, {
//     foreignKey: 'post_id'
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id'
// });

// Post.hasMany(Comment, {
//     foreignKey: 'post_id'
// })


module.exports = User;