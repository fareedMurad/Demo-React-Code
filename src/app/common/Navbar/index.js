import { observer } from "mobx-react-lite";
import React, { useContext, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { StoreContext } from "../../stores/root-store";
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Form,
    Row,
    Col,
    FormControl,
    Dropdown,
    Popover,
    OverlayTrigger
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./styles.scss";

const FisrtNavbar = ({
    store,
    defaultLanguage,
    handleChangeDefaultLanguage,
    setDefaultLanguage
}) => {
    const handleLanguageChange = (language) => {
        handleChangeDefaultLanguage(language)
            .catch(() => {})
            .finally(() => {
                setDefaultLanguage(store.defaultLanguageChnaged);
            });
    };

    // const isLanguageChanged = () => {
    //     if (!defaultLanguage?.shortname) {
    //         return false;
    //     }
    //     switch (defaultLanguage?.shortname) {
    //         case "Prihlásenie": {
    //             return false;
    //         }
    //         case "ENGLISH": {
    //             return true;
    //         }
    //         default: {
    //             return false;
    //         }
    //     }
    // };
    const popover = (
        <Popover id="popover-basic">
            <Popover.Content>
                <div className="language-switch-popover">
                    {store.HeaderContent?.languageOptions?.map((language) => (
                        <a
                            href="#"
                            className="d-flex nav-link"
                            onClick={() => handleLanguageChange(language)}
                        >
                            <h6 className="color-primary-dark">{language.shortname}</h6>
                            <h6 className="primary-dark-300">{language.longname}</h6>
                        </a>
                    ))}
                </div>
            </Popover.Content>
        </Popover>
    );
    return (
        <Navbar className="dark-gradient first-navbar" expand="md">
            <Container>
                <Row noGutters className="d-flex justify-content-between container">
                    <Col xs={"auto"} className="d-flex g-2 align-items-center">
                        {/* <Navbar.Brand href="#home">
                            <img src="/assets/images/navbar/first-navbar-vector.png" alt="logo" />
                        </Navbar.Brand> */}
                        <Form inline className="d-none d-md-block ">
                            <FormControl
                                type="text"
                                placeholder="Zadaj hľadaný výraz"
                                className="bg-transparent h-auto rounded-0 w-100 input-text"
                            />
                            <span className="input-border-bottom" />
                        </Form>
                        <div className="d-none d-md-flex justify-content-center align-items-center search-icon-box">
                            <img
                                src="/assets/images/navbar/search-icon.png"
                                alt="search-icons"
                                className=""
                            />
                        </div>
                    </Col>
                    <Col xs={"auto"} className="d-flex justify-content-end sw-switch-tooltip">
                        <div className="nav-img-box-box">
                            <img src="/assets/images/navbar/first-navbar-vector.png" alt="logo" />
                        </div>
                        <div
                            className={`custom-swtich cursor-pointer 
                            `}
                            // ${isLanguageChanged() ? "language-changed-swtich" : ""}
                        >
                            <span
                                className={`input-text 
                                `}
                                // ${ isLanguageChanged() ? "language-changed-element" : ""}
                            >
                                <span>{"Prihlásenie"}</span>

                                <img
                                    src="/assets/images/navbar/first-navbar-switch-element.png"
                                    alt="switch"
                                    className={`switch-element `}
                                />
                            </span>
                        </div>
                        <div className="sa-tag">
                            <OverlayTrigger trigger="focus" placement="bottom" overlay={popover}>
                                <a href="#" className="selected-language">
                                    {defaultLanguage?.shortname}
                                </a>
                            </OverlayTrigger>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

const AppNavbar = () => {
    const store = useContext(StoreContext);
    const location = useLocation();
    const [defaultLanguage, setDefaultLanguage] = useState(null);
    const [navLinks, setNavLinks] = useState([]);
    useEffect(() => {
        store.HeaderContent.loadDefaultLanguage()
            .catch(() => {})
            .finally(() => {
                setDefaultLanguage(store.defaultLanguageChnaged);
            });
        
    }, []);
    useEffect(() => {
        store.HeaderContent.loadHeaderContent()
            .catch(() => {})
            .finally(() => {
                setNavLinks([...store.HeaderContent.headerContent.navLinks]);
            });

        
    }, [store?.defaultLanguageChnaged]);

    return (
        <div className="navbars">
            <FisrtNavbar
                store={store}
                setDefaultLanguage={setDefaultLanguage}
                defaultLanguage={defaultLanguage}
                handleChangeDefaultLanguage={store.HeaderContent.handleChangeDefaultLanguage}
            />
            <Navbar className="second-navbar" expand="md">
                <Container>
                    <div className="d-flex justify-content-between container align-items-center align-items-md-end">
                        <Link to="/" className="navbar-brand">
                            <img src="/assets/images/logo.png" alt="logo" />
                        </Link>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Form inline className="d-block d-md-none ">
                                <FormControl
                                    type="text"
                                    placeholder="Zadaj hľadaný výraz"
                                    className="bg-transparent rounded-0 w-100 input-text"
                                />
                                <span className="input-border-bottom" />
                            </Form>
                            <Nav className=" w-100 justify-content-end nav-links align-items-center">
                                {navLinks.map((link, index) => {
                                    return (
                                        <>
                                            <Link
                                                to={link.to}
                                                key={index}
                                                className="position-relative color-dark nav-link main-link"
                                            >
                                                <div>
                                                    <h6
                                                        dangerouslySetInnerHTML={{
                                                            __html: link.label
                                                        }}
                                                        className={`color-primary-dark text-center ${
                                                            location.pathname === link.to
                                                                ? "color-primary active-link"
                                                                : ""
                                                        }`}
                                                    />
                                                    {link.dropdownItems && (
                                                        <div className="d-none d-md-block">
                                                            <div
                                                                className={
                                                                    "nav-bar-dropdown-gradient dropdown position-absolute d-none"
                                                                }
                                                            >
                                                                {link.dropdownItems.dropdowList.map(
                                                                    (l, i) => (
                                                                        <Link
                                                                            to={l.to}
                                                                            key={i}
                                                                            className="nav-link"
                                                                        >
                                                                            <h6
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html: l.label
                                                                                }}
                                                                                className="color-primary-dark text-center"
                                                                            />
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>

                                            {link.dropdownItems && (
                                                <div className="d-block d-md-none">
                                                    {link.dropdownItems.dropdowList.map((l, i) => (
                                                        <Link
                                                            to={l.to}
                                                            key={index + i}
                                                            className="position-relative color-dark nav-link"
                                                        >
                                                            <div>
                                                                <h6
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: l.label
                                                                    }}
                                                                    // className={`text-center ${
                                                                    //     location.pathname ===
                                                                    //     link.href
                                                                    //         ? "color-primary active-link"
                                                                    //         : ""
                                                                    // }`}
                                                                />
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    );
                                })}
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default observer(AppNavbar);
