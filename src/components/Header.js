import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/Home">
          <div className="header">
            <img className="display" src="./marvel.jpeg" alt="" />
          </div>
        </Link>
        <div className="display_nav">
          <Link to="/Characters">Characters </Link>
          <Link to="home">Home sweet home </Link>
          <Link to="/Comics">Comics </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
