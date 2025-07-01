const Home = () => (
  <div
    className="d-flex align-items-center justify-content-center vh-100 text-white"
    style={{
      backgroundImage: "url('/background.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="text-center">
      <h1 className="display-4 fw-bold mb-4">Super Cars Co.</h1>
      <h2 className="h3 mb-5">PRESTIGE USED CARS IN IPSWICH AND SUFFOLK</h2>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-outline-light btn-lg">
          BROWSE SHOWROOM
        </button>
        <button className="btn btn-outline-light btn-lg">SELL YOUR CAR</button>
      </div>
    </div>
  </div>
);

export default Home;
