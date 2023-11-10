import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
const Home = lazy(() => import("./components/Home/Home"));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
