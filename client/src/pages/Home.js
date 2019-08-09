import React from "react";
import CardWrapper from "../components/CardWrapper";
import ItemsDonated from "../components/ItemsDonated";
import MapWrapper from "../components/MapWrapper";
import SimpleMap from "../components/SimpleMap";

function Home() {
    return (
        <div>
            <CardWrapper>
                <ItemsDonated />
            </CardWrapper>
            <MapWrapper>
                <SimpleMap />
            </MapWrapper>
        </div>
    );
}

export default Home;