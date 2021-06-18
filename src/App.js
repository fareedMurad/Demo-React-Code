import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "./app/common/error-boundary";
import AppNavbar from "./app/common/Navbar";
import ScrollToTop from "./app/common/scroll-to-top";
import AppFooter from "./app/common/Footer";
import { routes } from "./routes";
// import { useLocation } from "react-router-dom";
import "./app/assets/custom.scss";

export const App = () => {
    // let location = useLocation();
    const [all_routes, setRoutes] = useState(routes);
    // useEffect(() => {
    //     setRoutes(all_routes);
    // }, [location?.pathname]);

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <AppNavbar />
                <ScrollToTop />
                <Switch>
                    {all_routes.map((route, index) => (
                        <Route
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                            key={index}
                        />
                    ))}
                </Switch>
                <AppFooter />
            </BrowserRouter>
        </ErrorBoundary>
    );
};
