import React from "react";
import { BrowserRouter, Routes , Route} from "react-router-dom";

import AdminHoc from "./container/layouts/adminHoc/adminHoc";
import HomePage from "./container/homePage";

const HomePageHoc = AdminHoc(HomePage)

export default function MyRoutes() {

    return( <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePageHoc />} />
        </Routes>

    </BrowserRouter>
    )

}
