const express = require('express');
const router = express.Router();

// GET /users/cool
router.get('/cool', (req, res) => {
  res.send("You're so cool");
});

module.exports = router;