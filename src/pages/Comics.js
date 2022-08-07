import axios from "axios";
import Loadingscreen from "../components/Loadingscreen";
// import { response } from "express";
import { useEffect, useState } from "react";

const Comics = () => {
  //creation d un state concernant les mise a jour des datas
  const [data, setData] = useState({});
  //creation d 'un state de chargement de la page
  const [isLoading, setIsLoading] = useState(true);
  //creation d'un useEffect pour lancer le script lorsque la requette est chargée

  useEffect(() => {
    const fetchComics = async () => {
      const response = await axios.get(
        "https://my-marvel-back-project.herokuapp.com/comics"
      );

      setData(response.data.results);
      console.log(data);
      setIsLoading(false);
    };
    fetchComics();
  }, [data]);
  console.log(data);

  return isLoading === true ? (
    <div className="loading">
      <Loadingscreen />
    </div>
  ) : (
    <section>
      <div>
        <div className="carroussel ">
          {/* //extraction des données de results */}
          {data.map((comic, index) => {
            return (
              <div className="picture">
                {/* nom des comics */}
                <h2 key={index}>{comic.title}</h2>
                <img
                  className="image"
                  src={
                    comic.thumbnail.path + "." + comic.thumbnail.extension ===
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                      ? "./logo_dc.jpeg"
                      : comic.thumbnail.path + "." + comic.thumbnail.extension
                  }
                  alt={comic.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comics;
