import "./App.css";

import { useEffect, useState } from "react";

import fetchData from "./utils/fetchApiData";
import DataTable from "./components/DataTable";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      const { data } = await fetchData();
      setDatas(data.items);
    };
    fetchApiData();
  }, []);

  return (
    <div className="App">
      <DataTable datas={datas} />
    </div>
  );
}

export default App;
