import { CompactTable } from "@table-library/react-table-library/compact"
import {
	DEFAULT_OPTIONS,
	getTheme,
} from "@table-library/react-table-library/material-ui"
import { useSort } from "@table-library/react-table-library/sort"
import { useTheme } from "@table-library/react-table-library/theme"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { nodes } from "../../data/data.json"
import styles from "./HRtable.module.scss"

function HRTable(): JSX.Element {
	const key = "Sort"
	const data = { nodes }

	const materialTheme = getTheme(DEFAULT_OPTIONS)
	const theme = useTheme(materialTheme)

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
				TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
				DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
				TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
				COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
				TASKS: (array) =>
					array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
			},
		}
	)

	function onSortChange(action: any, state: any) {
		console.log(action, state)
	}

	const COLUMNS = [
		{
			label: "Task",
			renderCell: (item: any) => item.name,
			sort: { sortKey: "TASK" },
		},
		{
			label: "Deadline",
			renderCell: (item: any) =>
				item.deadline.toLocaleDateString("en-US", {
					year: "numeric",
					month: "2-digit",
					day: "2-digit",
				}),
			sort: { sortKey: "DEADLINE" },
		},
		{
			label: "Type",
			renderCell: (item: any) => item.type,
			sort: { sortKey: "TYPE" },
		},
		{
			label: "Complete",
			renderCell: (item: any) => item.isComplete.toString(),
			sort: { sortKey: "COMPLETE" },
		},
		{
			label: "Tasks",
			renderCell: (item: any) => item.nodes?.length,
			sort: { sortKey: "TASKS" },
		},
	]

	return (
		<>
			<CompactTable columns={COLUMNS} data={data} sort={sort} theme={theme} />
			<br />
		</>
	)
}

export default HRTable
