import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import DashboardPage from "./components/DashboardPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignupPage from "./components/SignupPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import GuestRoute from "./components/GuestRoute.jsx";
import { useXhr } from "./hooks/useXhr.jsx";
import { useAuth } from "./contexts/AuthContext.jsx";
import { DocsProvider } from "./contexts/DocsContext.jsx";
import { ActionsProvider } from "./contexts/ActionsContext.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
import NotificationRoom from "./components/NotificationRoom.jsx";

const App = () => {
    const { currentUser, setCurrentUser } = useAuth();
    const [shouldGetMe, setShouldGetMe] = useState(false);

    const profileRequest = useXhr(
        shouldGetMe,
        "get",
        `${process.env.REACT_APP_SERVER_URL}/api/users/me`
    );

    useEffect(() => {
        if (!currentUser || currentUser._id) {
            setShouldGetMe(true);
        }

        return () => {
            setShouldGetMe(false);
        };
    }, []);

    useEffect(() => {
        if (profileRequest && profileRequest.data) {
            setCurrentUser(profileRequest.data.user);
        }

        return () => {};
    }, [profileRequest]);

    return (
        <NotificationRoom>
            <DocsProvider>
                <ActionsProvider>
                    <Router>
                        <Layout>
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/"
                                    component={DashboardPage}
                                />
                                <GuestRoute
                                    exact
                                    path="/login"
                                    component={LoginPage}
                                />
                                <GuestRoute
                                    exact
                                    path="/signup"
                                    component={SignupPage}
                                />
                                <Route component={NotFoundPage} />
                            </Switch>
                        </Layout>
                    </Router>
                </ActionsProvider>
            </DocsProvider>
        </NotificationRoom>
    );
};

export default App;
