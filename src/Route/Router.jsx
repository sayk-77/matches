import React from "react";
import { Route, Routes } from "react-router-dom";
import MainMenu from "../MainMenu/MainMenu";
import LevelOne from "../Levels/LevelOne";
import LevelTwo from "../Levels/LevelTwo";
import LevelThree from "../Levels/LevelThree";

function Router() {
    // отвечает за маршруты в приложении
    return(
      <>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route path='/level-one' element={<LevelOne />} />
          <Route path='/level-two' element={<LevelTwo />} />
          <Route path='/level-three' element={<LevelThree />} />
        </Routes> 
      </>
    );
}

export default Router