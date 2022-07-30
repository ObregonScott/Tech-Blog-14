const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
// const Reaction = require('./Reaction');

// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    // through: Reaction,
    // as: 'reacted_posts',
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    // through: Reaction,
    // as: 'reacted_posts',
    foreignKey: 'post_id',
    onDelete: 'CASCADE'

});

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
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
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


module.exports = { User, Post, Comment};