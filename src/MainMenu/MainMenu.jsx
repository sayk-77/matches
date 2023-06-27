import React from "react";
import './MainMenu.css';
import { Link } from "react-router-dom";

function MainMenu() {
    return(
        <div className="MainMenu">
            <h1>Головоломки со спичками</h1>
            <ul>
                <Link to='/level-one'><li>1 уровень</li></Link>
                <Link to='/level-two'><li>2 уровень</li></Link>
                <Link to='/level-three'><li>3 уровень</li></Link>
            </ul>
        </div>
    );
}

export default MainMenu;
