import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import PlateCampaign from "../home/PlateCampaign";

const Advertisement : React.FC = () => {
    const {advertisement} = useSelector((state : RootState) => state.fetch_reducer)

    return (
        <main className={"commercial-page footer_to_bottom"}>
            <div className={"style_block_blue commercial__catalog"}>
                <PlateCampaign listCampaign={advertisement}/>
            </div>
        </main>
    )
}

export default Advertisement;