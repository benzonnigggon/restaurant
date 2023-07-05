import React from "react";
import ReactDOM from "react-dom/client";

const Home = () =>{
    return (
        <React.Fragment>
            <div id="header">
                <h1 className="text-center">Vintage Kitchen</h1>
            </div>
        </React.Fragment>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Home/>);