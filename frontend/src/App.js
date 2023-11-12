import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventForm from "./pages/EventForm";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<EventForm/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
