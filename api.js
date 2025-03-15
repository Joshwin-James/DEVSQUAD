const express = require('express');
const router = express.Router();
const { getJobs, createJob } = require('../controllers/jobController');

// @route   GET /api/jobs
router.get('/jobs', getJobs);

// @route   POST /api/jobs
router.post('/jobs', createJob);

module.exports = router;