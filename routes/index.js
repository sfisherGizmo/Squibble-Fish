const express = require('express');
const _ = require('lodash');
const fetchers = require('../helpers/fetch');

const FetchPosts = fetchers.FetchPosts;
const FetchPages = fetchers.FetchPages;

const router = express.Router();

/**
 * Main routes. If data is not present send it to the
 * 404 middleware
 */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Squibble Fish' });
});

router.get('/post/:slug', async function(req, res, next) {
  const { data } = await FetchPosts(req.params);
  if (_.isEmpty(data)) {
    next();
  }
  res.render('single', data[0]);
});

router.get('/posts', async function(req, res, next) {
  const { data } = await FetchPosts();
  res.render('all', data);
});

router.get('/page/:slug', async function(req, res, next) {
  const { data } = await FetchPages(req.params);
  if (_.isEmpty(data)) {
    next();
  }
  res.render('single', data[0]);
});

router.get('/pages', async function(req, res, next) {
  const { data } = await FetchPages(req.params);
  if (_.isEmpty(data)) {
    next();
  }
  res.render('all', data);
});

router.get('*', function (req, res, next) {
  next();
});

module.exports = router;
