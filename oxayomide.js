import express from 'express';
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
  const utcTime = `${now.getUTCFullYear()}-${formatTwoDigits(now.getUTCMonth() + 1)}-${formatTwoDigits(now.getUTCDate())}T${formatTwoDigits(now.getUTCHours())}:${formatTwoDigits(now.getUTCMinutes())}:${formatTwoDigits(now.getUTCSeconds())}Z`;

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

export default app;

// Local server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

