import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Direct from "./routes/Direct";
import Explore from "./routes/Explore";
import Home from "./routes/Home";
import ModalPage from "./ModalPage";

function MovieApp() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/hello" element={<h2>Hello</h2>} /> */}
                <Route path="/modal" element={<ModalPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/direct/inbox" element={<Direct />} />
                <Route path="/explore/" element={<Explore />} />
            </Routes>
        </Router>
    );
}

export default MovieApp;
