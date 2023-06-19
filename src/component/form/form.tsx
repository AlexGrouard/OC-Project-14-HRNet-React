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
import { DatePicker } from "date-picker"
import { useState } from "react"
import { states } from "../../utils/states"

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

	handleReturnDateBirth = (date: string) => {
		setDateOfBirth(date)
	}
	handleReturnDateStart = (date: string) => {
		setStartDate(date)
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
						/* onSubmit={handleSubmit} */
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
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<DatePicker
									yearRange={{ start: 1980, end: 2000 }}
									returnDate={handleReturnDateBirth}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
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
										value={usState}
										onChange={(e) => setUsState(e.target.value)}
									>
										{states.map((state) => (
											<MenuItem
												key={state.abbreviation}
												value={state.abbreviation}
											>
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
