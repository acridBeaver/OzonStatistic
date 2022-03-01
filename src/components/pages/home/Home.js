import Graph from "./Graph";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetch_list_advertisement} from "../../../store/fetch_backend_api";
import Campaign from "./Campaign";
import PlateCampaign from "./PlateCampaign";

function Home() {
    const {advertisement} = useSelector(state => state.fetch_reducer)
    const dispatch = useDispatch();

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