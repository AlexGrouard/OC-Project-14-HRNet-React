import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HRTable from "../component/table/HRtable"
import Home from "../pages/Home"
import styles from "./Layout.module.scss"

function Layout(): JSX.Element {
	return (
		<Router>
			<div className={styles.container}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/tables' element={<HRTable />} />
				</Routes>
			</div>
		</Router>
	)
}

export default Layout
