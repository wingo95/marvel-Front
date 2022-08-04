import axios from "axios";
// import { response } from "express";
import { useEffect, usestate } from "react";

const Characters = () => {
  const { data, setData } = usestate({});
  const { isLoading, setIsLoading } = usestate(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchCharacters();
  });
  return isLoading === true ? (
    <div>Loading ....🤷🏽‍♂️ please wait</div>
  ) : (
    <section>
      <h2>{data.name}</h2>
      <img
        src={data.thumbmail.path + "." + data.thumbmail.extension}
        alt={data.name}
        style={{ height: "200px" }}
      />
      {data.map((personnage, index) => {
        return <p key={index}>{personnage.title}</p>;
      })}
    </section>
  );
};

export default Characters;
