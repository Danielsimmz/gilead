const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const providerStrategy = require('../strategies/provider.strategy');
const pool = require('../modules/pool');
const router = express.Router();

// // Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    res.send(req.provider);
});

// Handles login form authenticate/login POST
// providerStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', providerStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});


// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
