import { h } from 'preact';
import { useState, useCallback, useMemo } from 'preact/hooks';

const useTableFilters = (columns) => {
	const [filters, setFilters] = useState([]);
	const [sortColumn, setSortColumn] = useState(null);
	const [sortOrder, setSortOrder] = useState(1);
	const rows = useCallback(
		(data) => {
			let rows = data.filter((row) => {
				return filters.every((filterOptions, index) =>
					filterOptions.length
						? columns[index]?.filter(row, filterOptions)
						: true
				);
			});
			if (sortColumn) {
				if (sortOrder > 0) {
					rows.sort(columns[sortColumn].sorter);
				} else {
					rows.sort((...args) => -columns[sortColumn].sorter(...args));
				}
			}
		},
		[filters, sortColumn, sortOrder]
	);

	const toggleSort = useMemo(
		() =>
			columns.map((_, i) => (i) => {
				return (e) => {
					if (sortColumn == i) return setSortOrder((o) => -o);
					setSortColumn(i);
				};
			}),
		[sortColumn]
	);

	return [toggleSort, rows];
};
const Table = <T,>({
	data,
	renderRow,
	columns,
}: {
	data: T[];
	renderRow: ({ row }: { row: T }) => JSX.Element;
	columns: {
		label: string;
		sorter: (prev: T, next: T) => number;
		filter: (row: T, query: string[]) => boolean; // true to keep
		options: { id: string; label: string }[]; // display checkboxes for label,
	}[];
}) => {
	return (
		<table>
			<thead>
				<tr>
					{columns.map((col, i) => (
						<th key={i} onClick={toggleSort(i)}>
							{col.label}
						</th>
					))}
				</tr>
			</thead>
			<tbody>{}</tbody>
		</table>
	);
};
