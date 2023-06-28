import { Link } from "react-router-dom"
import Form from "../component/form"

/**
 * @function Home
 * @returns Home page
 * @description Home page for creating new employee
 */

function Home() {
	return (
		<div>
			<h1>HRnet</h1>
			<main>
				<Link to='/tables'>View Current Employees</Link>
				<Form />
			</main>
		</div>
	)
}

export default Home
