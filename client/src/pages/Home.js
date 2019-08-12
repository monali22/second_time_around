import React from "react";
import CardWrapper from "../components/CardWrapper";
import ItemsDonated from "../components/ItemsDonated";
import MapWrapper from "../components/MapWrapper";
import SimpleMap from "../components/SimpleMap";
import ShippingHelp from "../components/ShippingHelp";
import HurryUpMsg from "../components/HurryUpMsg";

function Home() {
    return (
        <div>
                <HurryUpMsg/>
            <CardWrapper>
                <ItemsDonated />
            </CardWrapper>
                <ShippingHelp/>
            
             {/* <MapWrapper> */}
                {/* <SimpleMap /> */}
            {/* </MapWrapper> */}
        </div>
    );
}

export default Home;