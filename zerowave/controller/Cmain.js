const main = require('../model/index');

exports.main = (req, res) => {
  res.render('main');
};

exports.map = (req, res) => {
  res.render('map');
};

exports.login = (req, res) => {
  res.render('login');
};

exports.join = (req, res) => {
  res.render('join');
};

exports.mypage = (req, res) => {
  res.render('mypage');
};
