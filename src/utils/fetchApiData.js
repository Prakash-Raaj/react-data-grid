import axios from "axios";

const url =
  "https://api.stackexchange.com/2.3/questions?pagesize=100&order=desc&sort=activity&site=stackoverflow";
// const options = {
//   headers: {
//     "X-RapidAPI-Key": "a969636e19msh49e2ec14894530fp16d48fjsn8cdb4bf5cc97",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };

const fetchData = async () => {
  const data = await axios.get(url);
  return data;
};

export default fetchData;
