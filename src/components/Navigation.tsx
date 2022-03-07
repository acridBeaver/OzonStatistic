import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Advertisement from "./pages/adverisement/Advertisement";
import Unit from "./pages/unit/Unit";
import Analytics from "./pages/analytics/Analytics";
import React, {useEffect} from "react";
import {useTypeDispatch} from "../store/store";
import {fetch_list_advertisement} from "../store/fetch_backend_api";

const Navigation : React.FC = () => {
    const dispatch = useTypeDispatch();

    useEffect(() => {
        dispatch(fetch_list_advertisement())
    }, [])

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