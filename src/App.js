import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Booking from "../src/components/Booking"

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;