import {
	Box,
	Button,
	Container,
	CssBaseline,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography
} from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import DatePicker from "date-picker-typescript"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormData } from "../../types/types"
import { states } from "../../utils/states"
import "./form.scss"

function Form(): JSX.Element {
	const [firstName, setFirstName] = useState<string>("")
	const [lastName, setLastName] = useState<string>("")
	const [dateOfBirth, setDateOfBirth] = useState<string>("")
	const [startDate, setStartDate] = useState<string>("")
	const [street, setStreet] = useState<string>("")
	const [city, setCity] = useState<string>("")
	const [usState, setUsState] = useState<string>("")
	const [zipCode, setZipCode] = useState<string>("")
	const [department, setDepartment] = useState<string>("")
	const navigate = useNavigate()

	const handleReturnDateBirth = (date: string) => {
		setDateOfBirth(date)
	}
	const handleReturnDateStart = (date: string) => {
		setStartDate(date)
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData: FormData = {
			firstName: firstName,
			lastName: lastName,
			dateOfBirth: dateOfBirth,
			startDate: startDate,
			street: street,
			city: city,
			usState: usState,
			zipCode: zipCode,
			department: department
		}
		localStorage.setItem("formData", JSON.stringify(formData))
		navigate("/tables")
	}

	const defaultTheme = createTheme()

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 1,
						padding: 2,
						borderRadius: 5,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						border: "1px solid lightgray"
					}}
				>
					<Typography component='h1' variant='h5'>
						Create Employee
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='firstName'
									label='First Name'
									name='first-name'
									error={firstName === "" || typeof firstName !== "string"}
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='last-name'
									error={lastName === "" || typeof lastName !== "string"}
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<InputLabel id='birth'>Date of Birth</InputLabel>
								<DatePicker
									yearRange={{ start: 1980, end: 2000 }}
									returnDate={handleReturnDateBirth}
								/>
							</Grid>
							<Grid item xs={12}>
								<InputLabel id='start'>Starting Date</InputLabel>
								<DatePicker
									yearRange={{ start: 2020, end: 2023 }}
									returnDate={handleReturnDateStart}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth margin='normal'>
									<InputLabel id='DepartmentLabel'>Department</InputLabel>
									<Select
										id='Department'
										labelId='DepartmentLabel'
										label='Department'
										error={department === "" || typeof department !== "string"}
										value={department}
										onChange={(e) => setDepartment(e.target.value)}
									>
										<MenuItem value='Sales'>Sales</MenuItem>
										<MenuItem value='Marketing'>Marketing</MenuItem>
										<MenuItem value='Engineering'>Engineering</MenuItem>
										<MenuItem value='Human Resources'>Human Resources</MenuItem>
										<MenuItem value='Legal'>Legal</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='street'
									label='Street'
									name='street'
									error={street === "" || typeof street !== "string"}
									value={street}
									onChange={(e) => setStreet(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='city'
									label='city'
									name='city'
									error={city === "" || typeof city !== "string"}
									value={city}
									onChange={(e) => setCity(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth margin='normal'>
									<InputLabel id='statesLabel'>States</InputLabel>
									<Select
										id='states'
										labelId='statesLabel'
										label='states'
										placeholder='Alabama'
										error={usState === ""}
										value={usState}
										onChange={(e) => setUsState(e.target.value)}
									>
										{states.map((state) => (
											<MenuItem key={state.abbreviation} value={state.name}>
												{state.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='zipCode'
									label='Zip Code'
									name='zip-code'
									error={
										(zipCode === "" || parseInt(zipCode) !== Number(zipCode)) &&
										zipCode.length != 5
									}
									value={zipCode}
									onChange={(e) => setZipCode(e.target.value)}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Save
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default Form
