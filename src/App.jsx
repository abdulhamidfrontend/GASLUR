import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import Home from "./Pages/Home/Home";
import Loader from "./Components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
