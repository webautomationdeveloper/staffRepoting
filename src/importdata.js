import { csv } from "d3";


const fetchMovies= async function() {
    const response = await csv('data.csv');
    return response;
  }

const data = fetchMovies();

export default data;