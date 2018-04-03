function index(req, res) {
  res.json({
    message: 'Welcome to Trip Planner!',
    documentation_url: 'https://github.com/dchuong09/TripPlanner-Project.git',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'To the homepage'
      }
    ]
  });
}

module.exports = {
  index: index
}