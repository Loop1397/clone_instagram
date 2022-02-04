import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ModalPage from "./routes/ModalPage";

function MovieApp() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/hello" element={<h2>Hello</h2>} /> */}
                <Route path="/modal" element={<ModalPage />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default MovieApp;
