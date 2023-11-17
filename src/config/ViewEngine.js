const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    // config dung de truy cap view va chay
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    // khai báo static file, file ảnh động trong file public,
    // khi chạy thì kiểu tao để trong file public nè, vô mà kiếm
    app.use(express.static(path.join('./src', 'public')))
}
module.exports = configViewEngine;