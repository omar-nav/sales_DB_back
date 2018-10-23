var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Sale = require('../models/Sale.js');

/* GET ALL SALES */
router.get('/showall', function (req, res, next) {
  Sale.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


/* GET SINGLE SALE BY ID */
router.get('/:id', function (req, res, next) {
  Sale.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE SALE */
router.post('/create', function (req, res, next) {
  Sale.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE SALE */
router.put('/:id', function (req, res, next) {
  Sale.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE SALE */
router.delete('/:id', function (req, res, next) {
  Sale.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
