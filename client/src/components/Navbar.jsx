import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand">GradGuid</span>

      <div className="navbar-nav">
        <Link className="nav-link" to="/career">Career</Link>
        <Link className="nav-link" to="/roadmaps">Roadmaps</Link>
        <Link className="nav-link" to="/colleges">Colleges</Link>
        <Link className="nav-link" to="/quiz">Quiz</Link>
      </div>
    </nav>
  );
}

export default Navbar;