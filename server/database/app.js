const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(express.json());

// Load dealers and reviews
const dealers = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'dealerships.json'), 'utf8'));
const reviews = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'reviews.json'), 'utf8'));

const PORT = 8080; 

// GET all dealers
app.get('/fetchDealers', (req, res) => {
  res.json(dealers);
});

// GET dealers by state
app.get('/fetchDealers/:state', (req, res) => {
  const state = req.params.state;
  const filtered = dealers.filter(d => d?.state?.toLowerCase() === state?.toLowerCase());
  res.json(filtered);
});

// GET dealer by id
app.get('/fetchDealer/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dealer = dealers.find(d => d.id === id);
  if (dealer) {
    res.json(dealer);
  } else {
    res.status(404).json({ error: 'Dealer not found' });
  }
});

// GET all reviews
app.get('/fetchReviews', (req, res) => {
  res.json(reviews);
});

// GET reviews by dealer id
app.get('/fetchReviews/dealer/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filtered = reviews.filter(r => r.dealerId === id);
  res.json(filtered);
});

// POST a new review
// POST a new review
app.post('/insert_review', (req, res) => {
  const review = req.body;
  // Ensure dealerId and year are numbers
  review.dealerId = Number(review.dealerId);
  review.year = Number(review.year);
  review.id = reviews.length ? reviews[reviews.length - 1].id + 1 : 1;
  reviews.push(review);

  // Save to file
  fs.writeFileSync(
    path.join(__dirname, 'data', 'reviews.json'),
    JSON.stringify(reviews, null, 2)
  );

  res.json({ status: "success", review });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
