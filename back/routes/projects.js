const express = require('express');
const router = express.Router();
const db = require('../sql/config');

router.get('/', (req, res) => {
  db.query('SELECT title, cover_img, id from project', (err, projects) => {
    if(err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
		}
   res.status(200).json(projects)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM project WHERE id = ?', id, (err, projects) => {
    if(err) {
      return res.status(500).json({
        error: err.message,
        detail: err.sql
      });
    }
    else if (projects.length === 0) {
      return res.status(404).json({
        error: `Il n'y a pas de project avec l'id ${id}`
      })
    }
    db.query('SELECT name, path from image WHERE project_id = ?', id, (err, images) => {
      const project = projects[0]
      project.images = images
      res.status(200).json(project)
    })
  });
})

module.exports = router;
