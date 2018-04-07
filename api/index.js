const express = require('express');
const router = express.Router();

const getArticles = require('../controllers/getArticles');
const deleteArticle = require('../controllers/deleteArticle');

router.post('/getArticles', (req, res) => {
    getArticles(req)
    .then((result) => {
        res.status(200).send({
            result: result
        })
    })
    .catch((err) => {
        console.error(err);
        res.status(400).send(err);
    });
});

router.post('/deleteArticle', (req, res) => {
    deleteArticle()
    .then((result) => {
        res.status(200).send({
            result: result
        })
    })
    .catch((err) => {
        console.error(err);
        res.status(400).send(err);
    });
});
