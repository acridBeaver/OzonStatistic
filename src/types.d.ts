declare module "*.svg" {
    const value: any;
    export = value;
}

declare module "*.jpg" {
    const value: any;
    export = value;
}

declare module "*.png" {
    const value: any;
    export = value;
}

declare interface ParsedCampaign {
    [index : string] : string
}

declare interface AdvertisementState {
    advertisement: Array<ParsedCampaign>
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

declare interface ProfileState {
    profile : UserInfo
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

interface UserInfo {
    id : string,
    clientId : number,
    login : string
}