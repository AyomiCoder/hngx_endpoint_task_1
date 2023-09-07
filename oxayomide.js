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

  // The current UTC time within a +/-2 minute window
  const currentTime = new Date().toISOString();

  // GitHub URLs
  const githubFileUrl = 'https://github.com/username/repo/blob/main/file_name.ext';
  const githubRepoUrl = 'https://github.com/username/repo';


  // Response object
  const responseObject = {
    slack_name: "OxAyomide",
    current_day: currentDay,
    utc_time: currentTime,
    track: "Backend",
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200
  };

  res.json(responseObject);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

