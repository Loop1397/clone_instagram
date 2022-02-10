import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import "./index.module.css";
import Instagram from "./Instagram";

ReactModal.setAppElement("#root");

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Instagram />
    </React.StrictMode>,
    rootElement
);
