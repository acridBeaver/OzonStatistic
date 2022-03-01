import {useEffect, useState} from "react";
import parserCampaign from "./parseCampaign/parserCampaign";

function Campaign(props){
    const [parsedCampaign, setParsedCampaign] = useState({})

    useEffect(() => {
        let parsedCampaign = parserCampaign(props.campaign)

        setParsedCampaign(parsedCampaign)
    },[])

    return (
        <div className={"campaign-signature"}>
            {Object.keys(parsedCampaign).map(x => <span>{x}: {parsedCampaign[x]}</span>)}
        </div>
    )
}

export default Campaign