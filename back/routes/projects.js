const express = require('express');
const router = express.Router();

const db = require('../sql/config');

router.get('/', (req, res) => {
  db.query('SELECT * from project', (err, projects) => {
    if(err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    res.json(projects)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM project LEFT JOIN image ON project.id = image.project_id WHERE id = ? ', id, (err, project) => {
    if(err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    else if (project.length === 0) {
      return res.status(404).json({
        error: `Il n'y a pas de project avec l'id ${id}`
      })
    }
    res.status(200).json(project[0])
  })
})
module.exports = router;
