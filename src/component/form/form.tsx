import {
	Alert,
	Box,
	Button,
	Container,
	CssBaseline,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	ThemeProvider,
	Typography,
	createTheme
} from "@mui/material"
import DatePicker from "date-picker-typescript"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormData } from "../../types/types"
import { states } from "../../utils/states"
import "./form.scss"

function Form(): JSX.Element {
	//form state
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
	//modal
	const [open, setOpen] = useState(false)
	const handleClose = () => {
		setOpen(false)
		navigate("/tables")
	}
	const style = {
		// eslint-disable-next-line @typescript-eslint/prefer-as-const
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4
	}

	//date picker return date
	const handleReturnDateBirth = (date: string) => {
		setDateOfBirth(date)
	}
	const handleReturnDateStart = (date: string) => {
		setStartDate(date)
	}
	//submit form
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (
			firstName === "" ||
			lastName === "" ||
			dateOfBirth === "" ||
			startDate === "" ||
			street === "" ||
			city === "" ||
			usState === "" ||
			zipCode === "" ||
			zipCode.length !== 5 ||
			department === ""
		)
			return alert("Please fill out all fields")
		else {
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
			setOpen(true)
		}
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
										zipCode === "" ||
										parseInt(zipCode) !== Number(zipCode) ||
										zipCode.length !== 5
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
						<Modal open={open} onClose={handleClose}>
							<Box sx={style}>
								<Typography id='modal-modal-description' sx={{ mt: 2 }}>
									Employee Created !
								</Typography>
							</Box>
						</Modal>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default Form
