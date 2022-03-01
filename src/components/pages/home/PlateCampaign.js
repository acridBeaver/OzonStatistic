import Campaign from "./Campaign";

function PlateCampaign(props) {
    return (
        <div className={"plate-campaign"}>
            {props.listCampaign.map(x => <Campaign campaign={x}/>)}
        </div>
    )
}

export default PlateCampaign