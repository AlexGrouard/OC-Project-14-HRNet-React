import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HRTable from "../pages/HRtable"
import Home from "../pages/Home"

/**
 * @function Layout
 * @returns Layout component
 * @description Layout component for routing
 */

function Layout(): JSX.Element {
	return (
		<Router>
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/tables' element={<HRTable />} />
				</Routes>
			</div>
		</Router>
	)
}

export default Layout
