import axios from "axios";
import Loadingscreen from "../components/Loadingscreen";
// import { response } from "express";
import { useEffect, useState } from "react";

const Characters = () => {
  //creation d un state concernant les mise a jour des datas
  const [data, setData] = useState([]);
  //creation d 'un state de chargement de la page
  const [isLoading, setIsLoading] = useState(true);
  //creation d'un useEffect pour lancer le script lorsque la requette est chargée

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        "https://my-marvel-back-project.herokuapp.com/characters"
      );

      setData(response.data.results);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchCharacters();
  }, []);

  return isLoading === true ? (
    <div className="loading">
      <Loadingscreen />
    </div>
  ) : (
    <section>
      <div>
        <div className="carroussel ">
          {/* //extraction des données de results */}
          {data.map((personnage, index) => {
            console.log();
            return (
              <div className="picture">
                {/* nom des personnages */}
                <h2 key={index}>{personnage.name}</h2>
                <img
                  className="image"
                  src={
                    personnage.thumbnail.path +
                      "." +
                      personnage.thumbnail.extension ===
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                      ? "./logo-spid.png"
                      : personnage.thumbnail.path +
                        "." +
                        personnage.thumbnail.extension
                  }
                  alt={personnage.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Characters;
