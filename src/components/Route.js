// No need to import React from "react"
// because there is no JSX in file

const Route = ({ path, children }) => {
    return window.location.pathname === path ? children : null;
};

export default Route;