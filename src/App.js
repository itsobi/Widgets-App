import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: "What is React?",
        content: "React, is a front end JavaScript framework."
    },
    {
        title: "Who created React?",
        content: "React was created by a software engineer at Facebook, Jordan Walke."
    },
    {
        title: "How is React used?",
        content: "React is used by creating components."
    }
];

const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Green",
        value: "green",
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    }
];

const App = () => {

    return (
        <div>
          <Translate />  
        </div>
    )
};

export default App;