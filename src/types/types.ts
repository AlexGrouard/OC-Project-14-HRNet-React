export type FormData = {
	firstName: string
	lastName: string
	dateOfBirth: string
	startDate: string
	street: string
	city: string
	usState: string
	zipCode: string
	department: string
}

export type DataEmployee = {
	employees: FormData | null
}
