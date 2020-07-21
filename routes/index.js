const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).render('index');
});

router.get('', (req, res, next) => {});

router.delete('', (req, res, next) => {});

router.put('', (req, res, next) => {});

router.post('', (req, res, next) => {});

module.exports = router;
