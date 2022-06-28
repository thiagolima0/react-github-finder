import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppFooter from "./components/layout/AppFooter";
import AppNavbar from "./components/layout/AppNavbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <AppNavbar />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />

          </Routes>
        </main>

        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
