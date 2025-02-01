import './App.css'
import useJsonFetch from './useJsonFetch';

const opts = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

function App() {
  const [data, error, isLoading] = useJsonFetch("/data", opts);
  const [data2, error2, isLoading2] = useJsonFetch("/error", opts);
  const [data3, error3, isLoading3] = useJsonFetch("/loading", opts);

  return (
    <>
      {data !== null && JSON.stringify(data) ? JSON.stringify(data) : "loading"}
      <br />
      {data2 !== null && JSON.stringify(data2)
        ? JSON.stringify(data2)
        : "loading"}
      <br />
      {data3 !== null && JSON.stringify(data3)
        ? JSON.stringify(data3)
        : "loading"}
    </>
  );
}

export default App;