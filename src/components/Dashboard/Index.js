import React, { useEffect, useState } from "react";
import axios from "axios";

const  Dashboard = () =>{
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.post("https://hoblist.com/api/movieList", {
          category: "movies",
          language: "Kannada",
          genre: "all",
          sort: "voting",
        });
        setMovies(response.data.result);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Language</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.language}</td>
              <td>{movie.voting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
