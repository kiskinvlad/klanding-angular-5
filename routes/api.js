var express = require('express');
var router = express.Router();

const tech = require('../data/tech.json');
const colors = require('../data/colors.json');
const brands = require('../data/brands.json');
const qboxes = require('../data/qboxes.json');
const accordion = require('../data/accordion.json');

router.get('/techs', function(req, res, next) {
  res.json(tech)
});
router.get('/colors', function(req, res, next) {
  res.status(200).json(colors)
});
router.get('/brands', function(req, res, next) {
  res.status(200).json(brands)
});
router.get('/qboxes', function(req, res, next) {
  res.status(200).json(qboxes)
});
router.get('/accordion', function(req, res, next) {
  res.status(200).json(accordion)
});

module.exports = router;
