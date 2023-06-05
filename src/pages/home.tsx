import { Link } from "react-router-dom"
import Form from "../component/form/form"

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
