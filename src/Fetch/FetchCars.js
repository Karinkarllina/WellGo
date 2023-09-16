import axios from 'axios';

const BASE_URL = 'https://65046379c8869921ae24f832.mockapi.io/Cars';


async function fetchCars (page, limit='') {
   try {
    const data = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`)
         return data;
   }  catch(error) {
         throw new Error(error.message);
      };
};
 
export default fetchCars;