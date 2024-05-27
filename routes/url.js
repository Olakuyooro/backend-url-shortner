const express = require('express');

const urlController = require('../controllers/url')
const router = express.Router()

router.post('/shorten', urlController.shortenUrl)
router.get('/', (req, res)=>{res.send("Hello")})
router.get('/:shortUrl', urlController.redirectUrl)


module.exports = router;