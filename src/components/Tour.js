import { useEffect, useState } from "react";
import "./tour.css";
import TourList from "./TourList";
const url = "https://course-api.com/react-tours-project";
const Tour = () => {
  let [loading, setLoading] = useState(false);
  let [tourdata, setData] = useState([]);
  const removeCard = (id) => {
    const newdata = tourdata.filter((tour) => {
      return tour.id !== id;
    });
    setData(newdata);
  };
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Oops something went wrong", error);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  if (loading) {
    return (
      <div className="loading-div">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          alt="Loading..."
        />
      </div>
    );
  }
  if (tourdata.length === 0) {
    return (
      <main className="refresh-container">
        <h1>No Tour List</h1>
        <button onClick={() => fetchData(url)}>refresh</button>
      </main>
    );
  }
  return (
    <main>
      <div className="title-container">
        <h1 className="title">Our Your</h1>
        <div className="underline"></div>
      </div>
      <TourList values={tourdata} removeCard={removeCard} />
    </main>
  );
};
export default Tour;
