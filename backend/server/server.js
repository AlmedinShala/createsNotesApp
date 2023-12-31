const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const notesRoutes = require('./routes/notes');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/', notesRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to Database & Listening on port ${process.env.PORT}...`
      );
    });
  })
  .catch((error) => console.log(error));
