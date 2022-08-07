import axios from "axios";
// import { response } from "express";
import { useEffect, useState } from "react";

const Comics = () => {
  //creation d un state concernant les mise a jour des datas
  const [data, setData] = useState({});
  //creation d 'un state de chargement de la page
  const [isLoading, setIsLoading] = useState(true);
  //creation d'un useEffect pour lancer le script lorsque la requette est chargée

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        "https://my-marvel-back-project.herokuapp.com/comics"
      );

      setData(response.data.results);
      console.log(data);
      setIsLoading(false);
    };
    fetchCharacters();
  }, []);
  console.log(data);

  return isLoading === true ? (
    <div>Loading ....🤷🏽‍♂️ please wait</div>
  ) : (
    <section>
      {/* //extraction des données de results */}
      {data.map((personnage, index) => {
        console.log(data.results);
        return (
          <div>
            <div>
              {/* nom des personnages */}
              <h2 key={index}>{personnage.name}</h2>
              <img
                src={
                  personnage.thumbnail.path +
                  "." +
                  personnage.thumbnail.extension
                }
                alt={personnage.name}
                style={{ height: "200px" }}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Comics;
