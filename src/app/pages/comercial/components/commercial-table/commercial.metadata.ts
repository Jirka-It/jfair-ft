export interface IComercial {

    id?         :number;  
	state?      :number;     
    name?       :string;
    summary?    :string;
    description?:string;
    openDate?   :Date | string;
    closeDate?  :Date | string;
    poster?     :string;
    urlPoster?  :string;
    urlImage?   :string;
    image?      :string;
    plan?       :string;
	info?       :string;
	color?      :string;
    map?        :any;
    urlMap?     :any;
    terms?      :any;
    event?      :IEvent;

} 

export interface IEvent{

    eventId                :number;
    token                 ?: any;
    keyWords              ?: any;
    sigla                 ?: any;
    name                   : string;
    summary               ?: any;
    description           ?: any;
    startDate             ?: any;
    endDate               ?: any;
    place                 ?: any;
    color                 ?: any;
    startRegistrationDate ?: any;
    endRegistrationDate   ?: any;
    baseColor             ?: any;
    eventType             ?: any;
    showPortal            ?: any;
    showEvents            ?: any;
    posterFile            ?: any;
    urlPosterFile         ?: any;
    advertisingPiece      ?: any;
    urlAdvertisingPiece   ?: any;
    registratioLink       ?: any;
    state                 ?: any;
    chapter               ?: any;
    assembly              ?: any;
    
}
