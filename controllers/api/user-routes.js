const router = require('express').Router();
const { User, Post, Comment, Reaction } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/logout', (req, res) => {

});