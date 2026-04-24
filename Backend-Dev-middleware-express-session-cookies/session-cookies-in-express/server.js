const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const multiStep = require('./middleware/multiStepForm');
const { languageMiddleware, setLanguage } = require('./middleware/language');
const adminAuth = require('./middleware/adminAuth');
const sessionTimeout = require('./middleware/sessionTimeout');
const { cartMiddleware, addToCart } = require('./middleware/cart');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));

app.use(languageMiddleware);
app.use(sessionTimeout);
app.use(cartMiddleware);

// Routes
app.use('/form', multiStep);

app.get('/set-lang', setLanguage);

app.get('/admin', adminAuth, (req, res) => {
  res.send("Welcome Admin");
});

app.post('/cart', addToCart);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
