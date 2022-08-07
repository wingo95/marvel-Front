import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <nav className="home_nav">
        <Link to="/Characters">
          <div>
            <img className="display" src="./all_char.jpeg" alt="Characters" />
          </div>
        </Link>

        <Link to="/comics">
          <div>
            <img className="display" src="./maxresdefault.jpeg" alt="Comics" />
          </div>
        </Link>
      </nav>
    </main>
  );
};
export default Home;
