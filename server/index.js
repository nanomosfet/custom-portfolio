/* global __dirname */
/* eslint no-undef: "error" */

const express = require('express')
const app = express()
const path = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const bodyParser = require('body-parser')

passport.use(new LocalStrategy((username, password, done) => {
    if (username === 'user' && password === 'password') {
      return done(null, username)
    }

    return done(null, false, { message: 'Incorrect Credentials' })
  }))
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const ensureAuthenticated = (req, res, next) => {
  return next()
  if (req.isAuthenticated()) {
    return next()
  }

  return res.status(401).send({ authenticated: false })
}

app.use(express.static('server/dist'))
app.use('/edit',express.static('server/dist'))
app.use(session({ secret: 'cats' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())
app.post('/api/save/', bodyParser.json(), (req, res) => {
  console.log(req.body)
  res.json(req.body)
})
app.get('/api', (req, res) => res.json({ somthing: 'hello' }))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '/dist/login.html')))
app.post('/login', passport.authenticate('local', { successRedirect: '/edit',
                                                    failureRedirect: '/login' }))
app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})
app.get(
  '/edit',
  ensureAuthenticated,
  (req, res) => res.sendFile(path.join(__dirname, '/dist/editable.html'))
)
app.get(
  '/edit/*',
  ensureAuthenticated,
  (req, res) => res.sendFile(path.join(__dirname, '/dist/editable.html'))
)
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '/dist/static.html')))
app.listen(3000, () => console.log('Example app listening on port 3000!'))
