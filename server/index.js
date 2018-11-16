/* global __dirname */
/* eslint no-undef: "error" */

const express = require('express')
const app = express()
const path = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const bodyParser = require('body-parser')
const multer = require('multer')
const crypto = require('crypto')
const storage = multer.diskStorage({
  destination: __dirname + '/uploads',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      if (err) {
        return cb(err)
      }

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

const upload = multer({ storage: storage })
let contentState = {
  pages: {
    byId: {
      1: {
        id: 1,
        path: '/',
        label: 'Home',
        isHome: true,
        rows: [1]
      },
      2: {
        id: 2,
        path: '/contact',
        label: 'Contact',
        rows: [2]
      }
    },
    allPages: [1, 2]
  },
  rows: {
    byId: {
      1: {
        cols: [2]
      },
      2: {
        cols: [1]
      }
    }
  },
  cols: {
    byId: {
      1: {
        id: 1,
        styleType: 'lightMain',
        items: [5, 4, 3, 2]
      },
      2: {
        id: 2,
        styleType: 'darkMain',
        items: [1]
      }
    }
  },
  items: {
    byId: {
      1: {
        id: 1,
        itemType: 'header',
        text: 'Header'
      },
      2: {
        id: 2,
        itemType: 'image',
        source: 'somePath',
        isAdded: false
      },
      3: {
        id: 3,
        itemType: 'pdfDownloadButton',
        source: 'somePath',
        text: 'Resume'
      },
      4: {
        id: 4,
        itemType: 'leadText',
        text: 'Really cool lead text that people pay attention too.'
      },
      5: {
        id: 5,
        itemType: 'header',
        text: 'Header'
      }
    }
  }
}

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

/**
 * @param {object} state  - unFilteredState
 * @returns {object} - state with no unused stuff
 */
const parseSaveState = function (state) {
  const { pages, cols, items, rows } = state

  const newState = {
    pages: {
      allPages: [],
      byId: {}
    },
    cols: { byId: {} },
    items: { byId: {} },
    rows: { byId: {} }
  }

  newState.pages.allPages = pages.allPages
  newState.pages.allPages.forEach((page) => {
    newState.pages.byId[page] = pages.byId[page]
    pages.byId[page].rows.forEach((row) => {
      newState.rows.byId[row] = rows.byId[row]
      rows.byId[row].cols.forEach((col) => {
        newState.cols.byId[col] = cols.byId[col]
        cols.byId[col].items.forEach((item) => {
          newState.items.byId[item] = items.byId[item]
        })
      })
    })
  })

  return newState
}

app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(express.static('server/dist'))
app.use('/edit', express.static('server/dist'))
app.use(session({ secret: 'cats' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
app.use(passport.session())
app.post('/api/save/', bodyParser.json(), (req, res) => {
  contentState = parseSaveState(req.body)
  res.json({ message: 'success' })
})

app.post('/api/save/files', upload.array('files'), (req, res) => {
  const ids = JSON.parse(req.body.ids)
  const files = []

  req.files.forEach(((file, idx) => files.push({
    id: ids[idx],
    path: file.filename
  })))
  res.json(files)
})


app.get('/api/latest', (req, res) => res.json(contentState))
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
