import { Stack, TablePagination, TextField } from "@mui/material"
import { CompactTable } from "@table-library/react-table-library/compact"
import {
	DEFAULT_OPTIONS,
	getTheme,
} from "@table-library/react-table-library/material-ui"
import { usePagination } from "@table-library/react-table-library/pagination"
import { useSort } from "@table-library/react-table-library/sort"
import { useTheme } from "@table-library/react-table-library/theme"
import { useState } from "react"
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"
import { nodes } from "../data/data"

function HRTable(): JSX.Element {
	const data = { nodes }
	//THEMES
	const materialTheme = getTheme(DEFAULT_OPTIONS)
	const theme = useTheme(materialTheme)
	//SORTING
	const sort = useSort(
		data,
		{
			onChange: onSortChange,
		},
		{
			sortIcon: {
				iconDefault: null,
				iconUp: <FaChevronUp />,
				iconDown: <FaChevronDown />,
			},
			sortFns: {
				FIRSTNAME: (array) =>
					array.sort((a, b) => a.firstName.localeCompare(b.firstName)),
				LASTNAME: (array) =>
					array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
				STARTDATE: (array) =>
					array.sort((a, b) => a.startDate.localeCompare(b.startDate)),
				DEPARTMENT: (array) =>
					array.sort((a, b) => a.department.localeCompare(b.department)),
				DATEOFBIRTH: (array) =>
					array.sort((a, b) => a.dateOfBirth - b.dateOfBirth),
				STREET: (array) =>
					array.sort((a, b) => a.street.localeCompare(b.street)),
				CITY: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
				STATE: (array) => array.sort((a, b) => a.state.localeCompare(b.state)),
				ZIPCODE: (array) => array.sort((a, b) => a.zipCode - b.zipCode),
			},
		}
	)

	function onSortChange(action: unknown, state: unknown) {
		console.log(action, state)
	}
	//PAGINATION
	const pagination = usePagination(data, {
		state: {
			page: 0,
			size: 10,
		},
		/* onChange: onPaginationChange, */
	})

	/* 	function onPaginationChange(action: any, state: any) {
		console.log(action, state)
	} */
	//SEARCH
	const [search, setSearch] = useState("")

	const handleSearch = (event: any) => {
		setSearch(event.target.value)
	}
	const COLUMNS = [
		{
			label: "First Name",
			renderCell: (item: any) => item.firstName,
			sort: { sortKey: "FIRSTNAME" },
		},
		{
			label: "Last Name",
			renderCell: (item: any) => item.lastName,
			sort: { sortKey: "LASTNAME" },
		},
		/*	{
			label: "Start Date",
			renderCell: (item: any) =>
				item.startDate.toLocaleDateString("fr-FR", {
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
				}),
			sort: { sortKey: "STARTDATE" },
		},*/
		{
			label: "Start Date",
			renderCell: (item: any) => item.startDate,
			sort: { sortKey: "STARTDATE" },
		},
		{
			label: "Department",
			renderCell: (item: any) => item.department,
			sort: { sortKey: "DEPARTMENT" },
		},
		{
			label: "Date of Birth",
			renderCell: (item: any) => item.dateOfBirth,
			sort: { sortKey: "DATEOFBIRTH" },
		},
		{
			label: "Street",
			renderCell: (item: any) => item.street,
			sort: { sortKey: "STREET" },
		},
		{
			label: "City",
			renderCell: (item: any) => item.city,
			sort: { sortKey: "CITY" },
		},
		{
			label: "State",
			renderCell: (item: any) => item.state,
			sort: { sortKey: "STATE" },
		},
		{
			label: "Zip Code",
			renderCell: (item: any) => item.zipCode,
			sort: { sortKey: "ZIPCODE" },
		},
	]

	return (
		<>
			<Stack spacing={10}>
				<TextField label='Search Task' value={search} onChange={handleSearch} />
			</Stack>
			<CompactTable columns={COLUMNS} data={data} sort={sort} theme={theme} />
			<br />
			<Stack spacing={10}>
				<TablePagination
					count={data.nodes.length}
					page={pagination.state.page}
					rowsPerPage={pagination.state.size}
					rowsPerPageOptions={[10, 25, 50, 100]}
					onRowsPerPageChange={(event) =>
						pagination.fns.onSetSize(parseInt(event.target.value, 10))
					}
					onPageChange={(event, page) => pagination.fns.onSetPage(page)}
				/>
			</Stack>
			<Link to='/'>Home</Link>
		</>
	)
}

export default HRTable
