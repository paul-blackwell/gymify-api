const express = require('express');
const router = express.Router();


// Posts route
router.get('/posts', (req, res) => {
    res.send('we are on posts')
});

module.exports = router;