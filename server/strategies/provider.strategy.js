const providerPassport = require('passport');
const LocalProviderStrategy = require('passport-local').Strategy;
const providerEncryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

providerPassport.serializeUser((provider, done) => {
  done(null, provider.id);
});

providerPassport.deserializeUser((id, done) => {
  pool.query('SELECT * FROM "medical_providers" WHERE id = $1', [id]).then((result) => {
    // Handle Errors
    const provider = result && result.rows && result.rows[0];
    console.log('hee-haw, here is the provider', provider);

    if (provider) {
      // user found
      delete provider.password; // remove password so it doesn't get sent
      // done takes an error (null in this case) and a user
      done(null, provider);
    } else {
      // user not found
      // done takes an error (null in this case) and a user (also null in this case)
      // this will result in the server returning a 401 status code
      done(null, null);
    }
  }).catch((error) => {
    console.log('Error with query during deserializing provider ', error);
    // done takes an error (we have one) and a user (null in this case)
    // this will result in the server returning a 500 status code
    done(error, null);
  });
});

// Does actual work of logging in a provider
providerPassport.use('local', new LocalProviderStrategy((username, password, done) => {
    pool.query('SELECT * FROM "medical_providers" WHERE username = $1', [username])
      .then((result) => {
        const provider = result && result.rows && result.rows[0];
        if (provider && providerEncryptLib.comparePassword(password, provider.password)) {
          // All good! Passwords match!
          // done takes an error (null in this case) and a provider
          done(null, provider);
        } else {
          // Not good! Username and password do not match.
          // done takes an error (null in this case) and a user (also null in this case)
          // this will result in the server returning a 401 status code
          done(null, null);
        }
      }).catch((error) => {
        console.log('Error with query for provider ', error);
        // done takes an error (we have one) and a user (null in this case)
        // this will result in the server returning a 500 status code
        done(error, null);
      });
  }));

module.exports = providerPassport;
