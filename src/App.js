import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button style={{cursor: "pointer"}}onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                /> : null
            }
        </div>
    )
};

export default App;