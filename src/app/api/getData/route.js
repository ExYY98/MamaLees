
import executeQuery from '../../lib/db.js';
import {NextResponse} from 'next/server';

export async function GET(request) {
  const results = await executeQuery({
    query: `SELECT * FROM Flavors;`,
    values: []
  })
  return NextResponse.json({data: results});
}


// const db = require('./database.js');
// const express = require('express');
// const app = express();
// const PORT = 4000;

// app.use(express.static('client/dist'));
// app.use(express.json());

// app.get('/Movies', (req, res) => {
//   db.getAll()
//   .then((results) => {
//     console.log(results);
//     res.status(201).send(JSON.stringify(results))
//   })
// })
