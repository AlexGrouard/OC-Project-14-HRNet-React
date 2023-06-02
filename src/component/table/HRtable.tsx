import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material"
import styles from "./HRtable.module.scss"

function HRTable(): JSX.Element {
	return (
		<TableContainer className={styles.tableContainer}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>First Name</TableCell>
						<TableCell>Last Name</TableCell>
						<TableCell>Start Date</TableCell>
						<TableCell>Departement</TableCell>
						<TableCell>Date of Birth</TableCell>
						<TableCell>Street</TableCell>
						<TableCell>City</TableCell>
						<TableCell>State</TableCell>
						<TableCell>ZipCode</TableCell>
					</TableRow>
				</TableHead>
				<TableBody></TableBody>
			</Table>
		</TableContainer>
	)
}

export default HRTable
