const { Model, DataTypes } = require('sequelize');
<<<<<<< HEAD
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
};

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // Passwords Must Be At Least 4 Characters In Length
          len: [4]
        }
      },
    },
    {
      hooks: {
        async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        async beforeUpdate(updatedUserData) {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        }
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
  }
);
=======
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

>>>>>>> develop

module.exports = User;