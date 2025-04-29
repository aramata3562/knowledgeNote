import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MenuPage } from "./pages/MenuPage";
import { ListPage } from "./pages/ListPage";
import { AddPage } from "./pages/AddPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-grayScale-2 dark:bg-grayScale-1 text-grayScale-12 dark:text-grayScale-12 p-4">
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/list/:category" element={<ListPage />} />
          <Route path="/add/:category" element={<AddPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
