import Graph from "./Graph";
import {useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetch_list_advertisement} from "../../../store/fetch_backend_api";
import PlateCampaign from "./PlateCampaign";
import {RootState, useTypeDispatch} from "../../../store/store";


const Home : React.FC = () => {
    const {advertisement} = useSelector((state : RootState) => state.fetch_reducer)
    const dispatch = useTypeDispatch();

    useEffect(() => {
        dispatch(fetch_list_advertisement())
    }, [])
    return (
        <main className={"first-page-content"}>
            <div className={"core-info"}>
                <Graph/>
            </div>
            <div className={"something-1"}>
                <PlateCampaign listCampaign={advertisement}/>
            </div>
            <div className={"something-2"}>

            </div>
            <div className={"something-3"}>

            </div>
        </main>
    )
}


export default Home;