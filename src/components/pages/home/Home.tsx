import Graph from "./Graph";
import {useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getListAdvertisement} from "../../../store/backend_api/fetch_advertisement";
import PlateCampaign from "./PlateCampaign";
import {RootState, useTypeDispatch} from "../../../store/store";


const Home : React.FC = () => {
    const {advertisement} = useSelector((state : RootState) => state.fetchAdvertisementReducer)

    return (
        <main className={"first-page-content footer_to_bottom"}>
            <div className={"core-info style_block_blue"}>
                <Graph/>
            </div>
            <div className={"something-1 style_block_blue"}>
                <PlateCampaign listCampaign={advertisement}/>
            </div>
            <div className={"something-2 style_block_blue"}>

            </div>
            <div className={"something-3 style_block_blue"}>

            </div>
        </main>
    )
}


export default Home;