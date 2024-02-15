const express = require('express')

exports.get_handler = (req, res, next) => {
    return res.status(200).send('Linux was first named FREAX, fortunately someone convinced him to change the name to Linux. phew!');
}

