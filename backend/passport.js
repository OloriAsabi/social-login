const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = '854146111131-kffeb79v44depif31ila1113sm569vnj.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

const GITHUB_CLIENT_ID = '5e757f4a3f82dd2c6b83'
const GITHUB_CLIENT_SECRET = 'd596eb1258e8d45abee4480d5d22d5409a5ef9cc'

passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
  function(accessToken, refreshToken, profile, done) {
      done(null,profile)
    }
    
));

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

{/*passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
  );*/}

passport.serializeUser((user,done) => {
 done(null,user)
})
passport.deserializeUser((user,done) => {
  done(null,user)
})