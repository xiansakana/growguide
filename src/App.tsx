// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ProgressBar from "./components/shared/ProgressBar";
import Home from "./pages/Home";

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  const handleLoadComplete = () => {
    setContentLoaded(true);
  };

  return (
    // <Routes>
    //   <Router>
    //     <Route path="/" element={<Homepage />} />
    //   </Router>
    // </Routes>
    <div>
      {!contentLoaded ? (
        <ProgressBar onLoaded={handleLoadComplete} />
      ) : (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
}

export default App;
