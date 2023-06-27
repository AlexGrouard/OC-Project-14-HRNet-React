/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { data } from "../data/data"
import { FormData } from "../types/types"
function HRTable(): JSX.Element {
	let localData
	//get local storage data
	if (localStorage.getItem("data") === null) {
		if (localStorage.getItem("formData") !== null) {
			const employees: FormData = JSON.parse(localStorage.getItem("formData")!)
			localStorage.removeItem("formData")
			localData = [employees]
			localStorage.setItem("data", JSON.stringify(localData))
		} else {
			localData = data
			localStorage.setItem("data", JSON.stringify(localData))
		}
	} else if (localStorage.getItem("formData") !== null) {
		const employees: FormData = JSON.parse(localStorage.getItem("formData")!)
		localStorage.removeItem("formData")
		localData = JSON.parse(localStorage.getItem("data")!)
		localData.push(employees)
		localStorage.setItem("data", JSON.stringify(localData))
	} else {
		localData = JSON.parse(localStorage.getItem("data")!)
	}

	const columns = useMemo<MRT_ColumnDef<FormData>[]>(
		() => [
			{
				accessorKey: "firstName",
				header: "First Name",
				sortable: true
			},
			{
				accessorKey: "lastName",
				header: "Last Name",
				sortable: true
			},
			{
				accessorKey: "startDate",
				header: "Start Date",
				sortable: true
			},
			{
				accessorKey: "department",
				header: "Department",
				sortable: true
			},
			{
				accessorKey: "dateOfBirth",
				header: "Date of Birth",
				sortable: true
			},
			{
				accessorKey: "street",
				header: "Street",
				sortable: true
			},
			{
				accessorKey: "city",
				header: "City",
				sortable: true
			},
			{
				accessorKey: "usState",
				header: "State",
				sortable: true
			},
			{
				accessorKey: "zipCode",
				header: "Zip Code",
				sortable: true
			}
		],
		[]
	)
	return (
		<div>
			<MaterialReactTable
				columns={columns}
				data={localData}
				enableColumnFilters={false}
				muiTablePaginationProps={{
					rowsPerPageOptions: [10, 20, 50, 100],
					SelectProps: {
						native: true
					},
					labelRowsPerPage: "Number of entries per page: "
				}}
			/>
			<Link to='/'>Home</Link>
		</div>
	)
}

export default HRTable
