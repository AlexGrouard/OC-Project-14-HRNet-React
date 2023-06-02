import { MenuItem, Select } from "@mui/material"
import { useState } from "react"
import { states } from "../../utils/states"
import styles from "./form.module.scss"

function Form(): JSX.Element {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [dateOfBirth, setDateOfBirth] = useState("")
	const [startDate, setStartDate] = useState("")
	const [street, setStreet] = useState("")
	const [city, setCity] = useState("")
	const [usState, setUsState] = useState("")
	const [zipCode, setZipCode] = useState("")
	const [department, setDepartment] = useState("")

	return (
		<div className={styles.container}>
			<h2>Create Employee</h2>
			<form className={styles.form}>
				<label>First Name</label>
				<input
					type='text'
					name='first-name'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>

				<label>Last Name</label>
				<input
					type='text'
					name='last-name'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>

				<label>Date of Birth</label>
				<input
					name='date-of-birth'
					type='text'
					value={dateOfBirth}
					onChange={(e) => setDateOfBirth(e.target.value)}
				/>

				<label>Start Date</label>
				<input
					type='text'
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
				/>

				<fieldset className={styles.address}>
					<legend>Address</legend>

					<label>Street</label>
					<input
						type='text'
						name='street'
						value={street}
						onChange={(e) => setStreet(e.target.value)}
					/>

					<label>City</label>
					<input
						name='city'
						type='text'
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>

					<label>State</label>
					<Select
						className={styles.state}
						placeholder='Alabama'
						value={usState}
						onChange={(e) => setUsState(e.target.value)}
					>
						{states.map((state) => (
							<MenuItem key={state.abbreviation} value={state.abbreviation}>
								{state.name}
							</MenuItem>
						))}
					</Select>

					<label>Zip Code</label>
					<input
						name='zip-code'
						type='number'
						value={zipCode}
						onChange={(e) => setZipCode(e.target.value)}
					/>
				</fieldset>
				<label>Department</label>
				<Select
					className={styles.department}
					value={department}
					label='Age'
					onChange={(e) => setDepartment(e.target.value)}
				>
					<MenuItem value='Sales'>Sales</MenuItem>
					<MenuItem value='Marketing'>Marketing</MenuItem>
					<MenuItem value='Engineering'>Engineering</MenuItem>
					<MenuItem value='Human Resources'>Human Resources</MenuItem>
					<MenuItem value='Legal'>Legal</MenuItem>
				</Select>
				<button> Save </button>
			</form>
		</div>
	)
}

export default Form
