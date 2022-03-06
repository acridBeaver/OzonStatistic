import React, {useEffect, useState} from "react";
import {parserCampaign} from "./parseCampaign/parserCampaign";

type PropsCampaign = {
    campaign : ParsedCampaign
}

const Campaign : React.FC<PropsCampaign> = ({campaign}) => {
    const [parsedCampaign, setParsedCampaign] = useState<ParsedCampaign>({})

    useEffect(() => {
        const parsedCampaign : ParsedCampaign = parserCampaign(campaign)

        setParsedCampaign(parsedCampaign)
    },[])

    return (
        <div className={"campaign-signature"}>
            {Object.keys(parsedCampaign).map((x: string) => <span>{x}: {parsedCampaign[x]}</span>)}
        </div>
    )
}


export default Campaign