import { useState, useEffect, useCallback } from "react";

const App = () => {
  const [data, setData] = useState<string | null>(null);
  const [refresh, setRefresh] = useState(false);

  const fetchData = useCallback(() => {
    console.log("Fetching data...");
    setData("Datos cargados correctamente");
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setRefresh(!refresh)}>Refrescar</button>
    </div>
  );
};

export default App;