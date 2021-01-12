const db = require('../db');
const express = require('express');
const usersRouter = new express.Router();

usersRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    const {rows} = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    if (rows[0]) {
      res.send(rows[0]);
    } else {
      res.status(404).send();
    }
  } else {
    res.status(400).send();
  }
});

module.exports = usersRouter;
