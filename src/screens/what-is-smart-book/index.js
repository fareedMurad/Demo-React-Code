import React, { useContext, useState, useEffect } from "react";
import { Container, Footer, Row, Col, Button } from "react-bootstrap";
import { StoreContext } from "../../app/stores/root-store";
import { Arrows } from "./local-components/Arrows";
import HeroSection from "../../app/common/HeroSection";
import Section2 from "./sections/Section-2";
import Section3 from "./sections/Section-3";
import Section4 from "./sections/Section-4";
import Section5 from "./sections/Section-5";
import Section6 from "./sections/Section-6";
import Section7 from "./sections/Section-7";
import Section8 from "./sections/Section-8";
import Section9 from "./sections/Section-9";
import Section10 from "./sections/Section-10";
import Section11 from "./sections/Section-11";

import "./styles.scss";

const Home = (props) => {
    const store = useContext(StoreContext);
    const [localStateJsonData, setLocalStateJsonDataContent] = useState(null);

    useEffect(() => {
        store.WhatIsSmartBookPageContent.loadWhatIsSmartBookPageContent()
            .catch(() => {})
            .finally(() => {
                setLocalStateJsonDataContent(
                    store.WhatIsSmartBookPageContent.whatIsSmartBookContent
                );
            });
    },[]);

    if (!localStateJsonData) {
        return (
            <div className="w-full w-md-50 d-flex flex-column justify-content-center align-items-center text-center">
                <h1>Loading...</h1>
                <p>Please Wait!</p>
            </div>
        );
    }

    const renderHeroSection = () => {
        const { year2004 } = localStateJsonData.activitiesYearly;
        return (
            <>
                <HeroSection
                    heading={localStateJsonData.heroSection.heading}
                    boldPara={localStateJsonData.heroSection.paragraph}
                    headingClasses="text-white"
                    image={"/assets/images/what-is-smart-book/hero-section-vector1.png"}
                >
                    <img
                        src="/assets/images/what-is-smart-book/year-2004-vector.png"
                        alt="logo"
                        className="d-none d-lg-block"
                    />
                </HeroSection>
                {/* Vector for small devices */}
                <Arrows
                    image={"/assets/images/what-is-smart-book/mobile/year-2004-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-flex d-lg-none year-vector-box year-vector-left-box align-items-center bg-transparent h-auto"
                    }
                />
            </>
        );
    };
    const renderSection2 = () => {
        return (
            <>
                <Section2 content={localStateJsonData.activitiesYearly} />
                {/* Vector for small devices */}
                <Arrows
                    image={"/assets/images/what-is-smart-book/mobile/year-2013-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-flex d-lg-none primary-50-gradient-bg year-vector-box year-vector-left-box justify-content-center align-items-center"
                    }
                />
            </>
        );
    };
    const renderSection3 = () => {
        return (
            <>
                <Section3 content={localStateJsonData.activitiesYearly} />
                <Arrows
                    image={"/assets/images/what-is-smart-book/mobile/year-2014-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-flex d-lg-none ml-auto primary-50-gradient-bg year-vector-box year-vector-right-box justify-content-center align-items-center"
                    }
                />
            </>
        );
    };
    const renderSection4 = () => {
        return (
            <>
                <Section4 content={localStateJsonData.activitiesYearly} />
                <Arrows
                    image={"/assets/images/what-is-smart-book/mobile/year-2015-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-flex d-lg-none primary-50-gradient-bg year-vector-box year-vector-left-box justify-content-center align-items-center"
                    }
                />
            </>
        );
    };
    const renderSection5 = () => {
        return (
            <>
                <Section5 content={localStateJsonData.activitiesYearly} />
                <Arrows
                    image={"/assets/images/what-is-smart-book/mobile/year-2016-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-flex d-lg-none primary-50-gradient-bg year-vector-box year-vector-right-box align-items-center justify-content-center"
                    }
                />
            </>
        );
    };
    const renderSection6 = () => {
        return (
            <>
                <Section6 content={localStateJsonData.activitiesYearly} />
                <Arrows
                    image={"/assets/images/what-is-smart-book/mobile/year-2017-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-flex d-md-none year-vector-box year-vector-left-box primary-50-gradient-bg align-items-center justify-content-center"
                    }
                    imageClasses={"d-block d-lg-none"}
                />
            </>
        );
    };
    const renderSection7 = () => {
        return (
            <>
                <Section7 content={localStateJsonData.activitiesYearly} />
                <Arrows
                    image={"/assets/images/what-is-smart-book/mobile/year-2018-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-flex d-md-none year-vector-box year-vector-right-box primary-50-gradient-bg align-items-center"
                    }
                    imageClasses={"d-block d-lg-none"}
                />
            </>
        );
    };
    const renderSection8 = () => {
        return (
            <>
                <Section8 content={localStateJsonData.activitiesYearly} />
                {/* Vector for small devices */}
                <Arrows
                    image={"/assets/images/what-is-smart-book/mobile/year-2020-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-flex d-md-none year-vector-box year-vector-left-box primary-50-gradient-bg align-items-center mr-auto justify-content-center"
                    }
                    imageClasses={"d-block d-lg-none"}
                />
            </>
        );
    };
    const renderSection9 = () => {
        return (
            <>
                <Section9 content={localStateJsonData.activitiesYearly} />
                {/* Vector for small devices */}

                <Arrows
                    image={"/assets/images/what-is-smart-book/mobile/year-2021-vector.png"}
                    alt="arrow"
                    wrapperClasses={
                        "d-flex d-md-none year-vector-box year-vector-right-box primary-50-gradient-bg align-items-center"
                    }
                    imageClasses={"d-block d-lg-none"}
                />
            </>
        );
    };
    const renderSection10 = () => {
        return <Section10 content={localStateJsonData.activitiesYearly} />;
    };
    const renderSection11 = () => {
        return <Section11 content={localStateJsonData.team_members} />;
    };
    return (
        <div id="what-is-smart-book">
            {renderHeroSection()}
            {renderSection2()}
            {renderSection3()}
            {renderSection4()}
            {renderSection5()}
            {renderSection6()}
            {renderSection7()}
            {renderSection8()}
            {renderSection9()}
            {renderSection10()}
            {renderSection11()}
        </div>
    );
};

export default Home;
