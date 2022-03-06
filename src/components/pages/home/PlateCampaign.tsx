import Campaign from "./Campaign";
import React from "react";


type Prop = {
    listCampaign: Array<ParsedCampaign>
}

const PlateCampaign : React.FC<Prop> = ({listCampaign}) => {
    return (
        <div className={"plate-campaign"}>
            {listCampaign.map((x) => <Campaign campaign={x}/>)}
        </div>
    )
}

export default PlateCampaign