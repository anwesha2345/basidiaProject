const express = require('express')
const app = express()

const userRoutes = require('../../interface_adapter/controller/userController');
const subjectRoutes = require('../../interface_adapter/controller/subjectController');

app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));

//expose static files
app.use(express.static('static'));
app.use('/user', userRoutes);
app.use('/subject', subjectRoutes);

// Error Handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

module.exports = app