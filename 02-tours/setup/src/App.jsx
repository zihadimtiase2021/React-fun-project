import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { RemoveContextProvide } from "./RemoveContext";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);

    setTours(newTours);
  };

  async function fetchTours() {
    try {
      setLoading(true);
      const respnse = await fetch(url);
      const data = await respnse.json();
      setLoading(false);
      setTours(prev => {
        return [...prev, ...data];
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <>
      {loading ? (
        <main>
          <Loading />
        </main>
      ) : tours.length === 0 ? (
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={fetchTours}>
              refresh
            </button>
          </div>
        </main>
      ) : (
        <main>
          <RemoveContextProvide value={removeTour}>
            <Tours tours={tours} />
          </RemoveContextProvide>
        </main>
      )}
    </>
  );
}

export default App;
