import { Nullish } from "@table-library/react-table-library/types/common"

export type Identifier = string | number

export type TableNode = {
	id: Identifier
	nodes?: TableNode[] | Nullish
	[prop: string]: any
}

export type ExtendedNode<T extends TableNode> = T & {
	treeXLevel?: number
	treeYLevel?: number
	parentNode?: ExtendedNode<T> | Nullish
	ancestors?: ExtendedNode<T>[]
}

export type Data<T extends TableNode> = {
	pageInfo?: any
	nodes: T[]
}
