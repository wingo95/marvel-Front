import axios from "axios";
// import { response } from "express";
import { useEffect, useState } from "react";

const Characters = () => {
  //creation d un state concernant les mise a jour des datas
  const { data, setData } = useState();
  //creation d 'un state de chargement de la page
  const { isLoading, setIsLoading } = useState(true);
  //creation d'un useEffect pour lancer le script lorsque la requette est chargée

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        `https://my-marvel-back-project.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
      );
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchCharacters();
  });
  return isLoading === true ? (
    <div>Loading ....🤷🏽‍♂️ please wait</div>
  ) : (
    <section>
      {/* //extraction des données de results */}
      {data.results.map((personnage, index) => {
        console.log(data.results);
        return (
          <div>
            {/* nom des personnages */}
            <h2 key={index}>{personnage.title}</h2>
            <img
              src={
                personnage.thumbnail.path + "." + personnage.thumbnail.extension
              }
              alt={personnage.name}
              style={{ height: "200px" }}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Characters;
