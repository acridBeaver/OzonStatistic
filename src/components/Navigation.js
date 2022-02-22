import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Advertisement from "./pages/adverisement/Advertisement";
import Unit from "./pages/unit/Unit";
import Analytics from "./pages/analytics/Analytics";

function Navigation () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/advertisement" element={<Advertisement/>}/>
            <Route path="/unit" element={<Unit/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
        </Routes>
    )
}

export default Navigation;