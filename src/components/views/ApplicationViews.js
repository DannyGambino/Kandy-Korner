import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../tickets/LocationList.js"
import { ProductList } from "../tickets/ProductList.js"

export const ApplicationViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>
                    <div>Your favorite candy like only Kandy can deliver</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <LocationList /> } />
                <Route path="tickets" element={ <ProductList /> } />
            </Route>
        </Routes>
    )
}