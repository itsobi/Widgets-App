import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

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

const showAccordion = () => {
    if (window.location.pathname === "/") {
        return <Accordion items={items} />;
    }
}

const showList = () => {
    if (window.location.pathname === "/list") {
        return <Search />;
    }
}

const showDropdown = () => {
    if (window.location.pathname === "/dropdown") {
        return <Dropdown />;
    }
}

const showTranslate = () => {
    if (window.location.pathname === "/translate") {
        return <Translate />;
    }
}



const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/list">
                <Search />
            </Route>

            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange= {setSelected}
                />
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
};

export default App;