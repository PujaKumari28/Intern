const express = require('express');
const hbs = require('hbs');
const path = require('path');
const route = require('./routers/main');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const fileUpload = require('express-fileupload');
require("./handlebar"); // this hbs user-made handlebars

const app = express();

app.use(fileUpload());
// Increase the limit for JSON payloads
app.use(bodyParser.json({ limit: '50mb' }));
// Increase the limit for URL-encoded payloads
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(session({
    secret: "restorent_datails",
    resave: false,
    saveUninitialized: false
}));

app.use('', route);

// Static folder
app.use("/static", express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

// Register partials
hbs.registerPartials(path.join(__dirname, '../views/partials'));

// MongoDB connection
mongoose.connect("mongodb+srv://puja:puja123@puja.h8hdlxj.mongodb.net/?retryWrites=true&w=majority&appName=puja", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("MongoDB connected..");
});

const PORT = process.env.PORT || 5656;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
