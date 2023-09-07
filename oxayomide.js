const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// This route takes two query parameters: slack_name and track
app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;

  if (!slack_name || !track) {
    return res.status(400).json({ error: 'Both slack_name and track are required query parameters.' });
  }

  // This generates the current day of the week in full
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getUTCDay()];

  // The current UTC time
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const currentTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

  // GitHub URLs
  const githubFileUrl = 'https://github.com/AyomiCoder/hngx_endpoint_task_1/blob/main/oxayomide.js';
  const githubRepoUrl = 'https://github.com/AyomiCoder/hngx_endpoint_task_1.git';


  // Response object
  const responseObject = {
    slack_name: "oxAyomide",
    current_day: currentDay,
    utc_time: currentTime,
    track: "backend",
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200
  };

  res.json(responseObject);
});

module.exports = app;

// Local server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

