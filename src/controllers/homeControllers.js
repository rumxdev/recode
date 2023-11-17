const express = require('express');
const app = express();


const getHomePage = (req, res) => {
    res.render('home.ejs')
}
module.exports = {
    getHomePage
}