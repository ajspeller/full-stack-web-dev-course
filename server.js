if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

require('./database/db');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const expressLayouts = require('express-ejs-layouts');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);

app.use(express.static('public'));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/authors', authorsRouter);

app.listen(PORT, () => {
  console.log('Server started on port ...', PORT);
});
