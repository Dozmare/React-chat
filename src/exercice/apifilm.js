import axios from '../../node_modules/axios';

export function getmovies()
{

    axios.get("http://www.omdbapi.com/?apikey=b502738f&s=matrix")
    .then((response) => {console.log(response.data);});

};
/* export const  getMovies = async() =>{
     const response = await axios.get(baseUrl);
     return getMovie.data.Search.filter
 }

 */