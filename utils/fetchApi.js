import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': '17127a3f4amsh1d2b452653f34fbp107dcdjsn21a89cd718ec'
//   }

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "17127a3f4amsh1d2b452653f34fbp107dcdjsn21a89cd718ec",
    },
  });

  return data;
};
