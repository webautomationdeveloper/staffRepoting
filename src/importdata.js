import { csv } from "d3";


const fetchMovies= async function() {
    const response = await csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vSpZ-Bw9MmuMxVhR9WDwTbR7mp1FqWJp47HfV0tFogMvB9qVY6YgyAWrlLNbZ18qegMGv2FC9rM6S7I/pub?gid=0&single=true&output=csv');
    return response;
  }

const data = fetchMovies();

export default data;