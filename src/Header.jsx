import { Link } from "react-router-dom";
import { Login } from "./Login";
import { useState } from "react";
import { Modal } from "./Modal";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLoginShow = () => {
    setIsLoginVisible(true);
    console.log("asd");
  };

  //closes modal
  const handleClose = () => {
    setIsLoginVisible(false);
  };

  return (
    <header>
      <Modal show={isLoginVisible} onClose={handleClose}>
        <Login />
      </Modal>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  All Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts/new">
                  New Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link" href="#posts-new">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleLoginShow}>
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <LogoutLink />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
