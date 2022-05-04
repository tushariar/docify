import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useDocs } from "../contexts/DocsContext";
import { useXhr } from "../hooks/useXhr";
import { setCookie } from "../utils/setCookie";

const LandingRequests = ({ children }) => {
    const { currentUser, setCurrentUser } = useAuth();
    const [shouldGetMe, setShouldGetMe] = useState(false);
    const [shouldGetDocs, setShouldGetDocs] = useState(false);

    const { dispatchDocs } = useDocs();

    const profileRequest = useXhr(
        shouldGetMe,
        "get",
        `${process.env.REACT_APP_SERVER_URL}/api/users/me`
    );

    const getAllDocs = useXhr(
        shouldGetDocs,
        "get",
        `${process.env.REACT_APP_SERVER_URL}/api/docs/`
    );

    useEffect(() => {
        if (currentUser === "undefined" || !currentUser || currentUser._id) {
            setShouldGetMe(true);
        }

        return () => {
            setShouldGetMe(false);
        };
    }, []);

    useEffect(() => {
        if (profileRequest && profileRequest.data) {
            setCurrentUser(profileRequest.data.user);
            setCookie("currentUser", JSON.stringify(profileRequest.data.user));
        }

        return () => {};
    }, [profileRequest]);

    useEffect(() => {
        if (getAllDocs && getAllDocs.type === "success") {
            let payload = getAllDocs.data.docs;
            if (getAllDocs.data.docs.length > 0) {
                dispatchDocs({
                    type: "load",
                    payload,
                });
            }
            setShouldGetDocs(false);
        }

        return () => {
            setShouldGetDocs(false);
        };
    }, [getAllDocs]);

    useEffect(() => {
        if (currentUser && currentUser._id && currentUser.email) {
            setShouldGetDocs(true);
        }
    }, [currentUser]);

    return <>{children}</>;
};

export default LandingRequests;