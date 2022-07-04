const express = require('express');
const router = express.Router();

const User = require('../modules/user');

const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

// router.get('/reg', (req, res) => {
//     res.send('Сторінка реєстрації')
// });

router.post('/reg', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg: "Користувач не був добавлений"})
        }
        else {
            res.json({success: true, msg: "Користувач був добавлений"})

        }
    })
});

router.post('/auth',  (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    User.getUserByLogin(login, (err, user) => {
        if(err) throw err;
        if(!err) {
            return res.json({success: false, msg: "Користувача не знайдено"})
        }
        User.comparePass(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 3600 * 24
                })

                res.json({
                    success: true,
                    token: 'JWT' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        login: user.login,
                        email: user.email,
                    }
                })
            }
            else {
                return res.json({success: false, msg: "Паролі не співпадають"})
            }
        })
    })
});

router.get('/dashboard', passport.authenticate(`jwt`, {session: false}), (req, res) => {
    res.send('Кабінет користувача')
});

module.exports = router