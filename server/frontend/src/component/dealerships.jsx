import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Dummy fetch - replace with your API endpoint
const fetchDealers = async () => {
  const res = await fetch("http://localhost:8080/fetchDealers");
  return res.json();
};

const uniqueStates = (dealers) =>
  Array.from(new Set(dealers.map((d) => d.state))).sort();

export default function Dealerships({ user }) {
  const [dealers, setDealers] = useState([]);
  const [stateFilter, setStateFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDealers().then((data) => {
      setDealers(data);
      setLoading(false);
    });
  }, []);

  const filtered = stateFilter
    ? dealers.filter((d) => d.state === stateFilter)
    : dealers;

  return (
    <div className="container" style={{ background: "#fff", borderRadius: 10, marginTop: 80, padding: 32, boxShadow: "0 4px 16px #0002" }}>
      <h2 style={{ color: "#028fa6", fontWeight: 700 }}>Dealerships</h2>
      <div className="d-flex justify-content-end mb-2">
        <select
          className="form-select"
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          style={{ maxWidth: 180 }}
        >
          <option value="">State</option>
          {uniqueStates(dealers).map((state) => (
            <option value={state} key={state}>{state}</option>
          ))}
        </select>
      </div>
      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Dealer Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Zip</th>
            <th>State</th>
            {user && <th>Review Dealer</th>}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={user ? 7 : 6}>Loading...</td>
            </tr>
          ) : filtered.length === 0 ? (
            <tr>
              <td colSpan={user ? 7 : 6}>No dealers found.</td>
            </tr>
          ) : (
            filtered.map((dealer) => (
              <tr key={dealer.id}>
                <td>{dealer.id}</td>
                <td>
                  <Link to={`/dealers/${dealer.id}`}>{dealer.name}</Link>
                </td>
                <td>{dealer.city}</td>
                <td>{dealer.address}</td>
                <td>{dealer.zip}</td>
                <td>{dealer.state}</td>
                {user && (
                  <td>
                    <Link to={`/dealers/${dealer.id}/review`}>
                      <i className="bi bi-chat-left-text"></i>
                    </Link>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
