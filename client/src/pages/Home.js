import React from "react";
import CardWrapper from "../components/CardWrapper";
import ItemsDonated from "../components/ItemsDonated";

function Home() {
    return (
        <div>
            <CardWrapper>
                <ItemsDonated />
            </CardWrapper>
        </div>
    );
}

export default Home;