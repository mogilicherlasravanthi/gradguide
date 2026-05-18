import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Welcome to Grad Guid 🎓</h2>
        <p>Select a module from navbar</p>
      </div>
    </>
  );
}

export default Home;