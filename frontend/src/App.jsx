import { BrowserRouter, Routes, Route } from "react-router-dom";
import BicycleList from "./pages/BicycleList";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bicycle_list" element={<BicycleList />} />
        <Route path="*" element={<BicycleList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
