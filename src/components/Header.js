import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <div className="header">
          <img src="./marvel.jpeg" alt="" />
        </div>

        <Link to="home">HOme sweet home</Link>
        <Link to="/Comics">Comics!!!</Link>
        <Link to="/Characters">Characters!!</Link>
      </div>
    </header>
  );
};
export default Header;
