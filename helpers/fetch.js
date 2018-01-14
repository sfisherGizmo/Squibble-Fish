const Request = require('axios');
const qs =require('qs');
const _ = require('lodash');

const base = 'http://local.wordpress.test/wp-json/wp/v2';

/**
 *
 * @param slug
 * @returns {Promise<*>}
 * @constructor
 */
exports.FetchPosts = async function(slug = '') {
  const uri = _.isNil(slug) ? `${base}/posts` : `${base}/posts?${qs.stringify(slug)}`;
  try {
    return { data } = await Request.get(uri).then(function (res) {
      return res;
    });
  } catch (e) {
    next(e)
  }
};

/**
 *
 * @param slug
 * @returns {Promise<*>}
 * @constructor
 */
exports.FetchPages = async function(slug) {
  const uri = _.isNil(slug) ? `${base}/pages` : `${base}/pages?${qs.stringify(slug)}`;
  try {
    return { data } =  await Request.get(uri).then(function (res) {
      return res;
    });
  } catch (e) {
    next(e)
  }
};
