// No need to import React from "react"
// because there is no JSX in file
import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener("popstate", onLocationChange);

        return () => {
            window.removeEventListener("popstate", onLocationChange);
        };
    }, [])
    
    return currentPath === path ? children : null;
};

export default Route;