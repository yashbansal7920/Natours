const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 🧧 SHUTTING DOWN!');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLER REJECTION! 🧧 SHUTTING DOWN!');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
