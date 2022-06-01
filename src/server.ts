import express from 'express';
import payload from 'payload';
import path from 'path';

// Use `dotenv` to import your `.env` file automatically
require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const app = express();

payload.init({
  secret: process.env.PAYLOAD_SECRET_KEY,
  mongoURL: process.env.MONGO_URL,
  express: app,
})

app.listen(process.env.PORT, async () => {
	console.log(`Express is now listening for incoming connections on port ${process.env.PORT}.`)
});
