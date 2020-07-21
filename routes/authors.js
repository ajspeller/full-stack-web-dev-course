const express = require('express');
const router = express.Router();

const Author = require('../models/Author.model');

// all authors
router.get('/', async (req, res, next) => {
  const { name } = req.query;
  let searchOptions = {};
  if (name != null && name !== '') {
    searchOptions.name = new RegExp(name, 'i');
  }
  try {
    const authors = await Author.find(searchOptions);
    res.render('authors/index', {
      authors,
      searchOptions: req.query,
    });
  } catch (err) {
    res.redirect('/');
  }
});

// new author route
router.get('/new', (req, res, next) => {
  res.render('authors/new', {
    author: new Author(),
  });
});

// create author route
router.post('/', async (req, res, next) => {
  const author = new Author({
    name: req.body.name,
  });

  try {
    const newAuthor = await author.save();
    // res.redirect(`authors/${newAuthor.id}`);
    res.redirect(`authors`);
  } catch (err) {
    res.render('authors/new', {
      author: author,
      errorMessage: 'Error creating Author',
    });
  }
});

module.exports = router;
