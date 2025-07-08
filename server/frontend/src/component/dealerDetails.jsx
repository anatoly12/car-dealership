import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DealerDetail({ user }) {
  const { id } = useParams();
  const [dealer, setDealer] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`/accounts/dealer/${id}`)
      .then((res) => res.json())
      .then((data) => setDealer(data.dealer));
    fetch(`/accounts/reviews/dealer/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews || []));
  }, [id]);

  if (!dealer) return <div>Loading dealer...</div>;

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 4px 16px #0001",
        padding: 32,
      }}
    >
      <h1 style={{ fontWeight: 700 }}>{dealer.name}</h1>
      <div style={{ color: "#888", marginBottom: 8 }}>
        {dealer.city}, {dealer.address}, Zip - {dealer.zip}, {dealer.state}
      </div>
      {user && (
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            background: "#10b9ae",
            color: "#fff",
            border: "none",
            padding: "7px 16px",
            borderRadius: 5,
            marginBottom: 20,
            marginLeft: 10,
          }}
        >
          Write a review
        </button>
      )}

      {showForm && user && (
        <ReviewForm
          dealerId={id}
          onPosted={() => {
            setShowForm(false);
            fetch(`/accounts/reviews/dealer/${id}`)
              .then((res) => res.json())
              .then((data) => setReviews(data.reviews || []));
          }}
        />
      )}

      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 16 }}
      >
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((rev, i) => (
            <div
              key={i}
              style={{
                minWidth: 240,
                padding: 18,
                background: "#f6f7fb",
                borderRadius: 12,
                boxShadow: "0 2px 6px #0001",
                marginBottom: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 4 }}>🙂</div>
              <div style={{ marginBottom: 8 }}>{rev.text}</div>
              <div style={{ color: "#999", fontSize: 13 }}>
                {rev.username} {rev.car_make} {rev.car_model} {rev.year}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function ReviewForm({ dealerId, onPosted }) {
  const [text, setText] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carMakes, setCarMakes] = useState([]);
  const [carModels, setCarModels] = useState([]);

  useEffect(() => {
    fetch("/accounts/get_cars")
      .then((res) => res.json())
      .then((data) => {
        setCarMakes([...new Set(data.CarModels.map((c) => c.CarMake))]);
        setCarModels(data.CarModels);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/add_review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dealerId: dealerId,
        text,
        purchaseDate,
        car_make: carMake,
        car_model: carModel,
        year: carYear,
      }),
    }).then(() => {
      setText("");
      setPurchaseDate("");
      setCarMake("");
      setCarModel("");
      setCarYear("");
      onPosted();
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: 30,
        background: "#e4faff",
        padding: 20,
        borderRadius: 12,
        maxWidth: 350,
      }}
    >
      <div>
        <textarea
          required
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ width: "100%", height: 60, marginBottom: 10 }}
        />
      </div>
      <div>
        <label>Purchase Date:</label>
        <br />
        <input
          type="date"
          required
          value={purchaseDate}
          onChange={(e) => setPurchaseDate(e.target.value)}
        />
      </div>
      <div>
        <label>Car Make:</label>
        <br />
        <select
          required
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
        >
          <option value="">Choose Car Make</option>
          {carMakes.map((make) => (
            <option key={make}>{make}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Car Model:</label>
        <br />
        <select
          required
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        >
          <option value="">Choose Car Model</option>
          {carModels
            .filter((c) => c.CarMake === carMake)
            .map((c) => (
              <option key={c.CarModel}>{c.CarModel}</option>
            ))}
        </select>
      </div>
      <div>
        <label>Car Year:</label>
        <br />
        <input
          type="number"
          required
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
        />
      </div>
      <button
        type="submit"
        style={{
          marginTop: 14,
          background: "#0066cc",
          color: "#fff",
          border: "none",
          padding: "7px 15px",
          borderRadius: 7,
        }}
      >
        Post Review
      </button>
    </form>
  );
}

export default DealerDetail;
