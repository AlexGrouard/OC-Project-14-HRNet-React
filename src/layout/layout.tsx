import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "../pages/home"
import styles from "./Layout.module.scss"
import Header from "./header/header"

function Layout(): JSX.Element {
	return (
		<Router>
			<Header />
			<div className={styles.container}>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</Router>
	)
}

export default Layout
