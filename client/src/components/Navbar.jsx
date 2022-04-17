import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  function logoutHandler(e) {
    e.preventDefault();
    auth.logout();
    navigate("/");
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: "0 2rem" }}>
        <a href="/" className="brand-logo">
          Shlink
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/create">Создать</Link>
          </li>
          <li>
            <Link to="/links">Ссылки</Link>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
