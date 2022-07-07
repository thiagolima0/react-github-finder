import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppFooter from "./components/layout/AppFooter";
import AppNavbar from "./components/layout/AppNavbar";
import About from "./pages/About";
import Home from "./pages/Home";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlerContext";
import AppAlert from "./components/AppAlert";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className="flex flex-col justify-start h-screen">
          <AppNavbar />

          <main className="container mx-auto px-3 pb-12">
            <AppAlert/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>

          {/* <AppFooter /> */}
        </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
