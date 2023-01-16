import 'preact/debug';
import { Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { h } from 'preact';
import style from './style.css';
import { Duration, DateTime } from 'luxon';
import cachedProcessedRuns from '../../cachedProcessedRuns.json';
import {
	useReactTable,
	createColumnHelper,
	getCoreRowModel,
	flexRender,
	getSortedRowModel,
	getFilteredRowModel,
} from '@tanstack/react-table';
import processData, { VariableInterface } from './processData';

function join(array: h.JSX.Element[], separator: h.JSX.Element | string) {
	if (typeof separator === 'string') {
		separator = <>{separator}</>;
	}
	for (let i = array.length - 1; i > 0; i--) {
		array.splice(i, 0, separator);
	}
	return array;
}

// add correct placement numbers
// add obsoleteness
// add scaled time data for dishes
// add scaled time data for players
// add scaled time data for dishes AND players
// add scaled time data for dishes, players, AND map-specific cards

type RowType = VariableInterface & {
	place: string;
	time_s: string;
	time: number;
	time_adj_s: string;
	time_adj: number;
	players: {
		url?: string;
		name: string;
	}[];
	verifyDate: string;
	weblink: string;
	dishReduction: number;
	leaderboardUrl: string;
	videoUrl: string;
};

const columnHelper = createColumnHelper<RowType>();

const columnDefs = [
	columnHelper.accessor('place', {
		cell: (props) => {
			const leaderboardUrl = props.row.original.leaderboardUrl;
			return <a href={leaderboardUrl}>{props.getValue()}</a>;
		},
		header: 'Placement',
	}),
	columnHelper.accessor('time', {
		cell: (props) => (
			<a href={props.row.original.videoUrl}>
				{Duration.fromISO(props.row.original.time_s).toISOTime()}
			</a>
		),
		header: 'Time',
		sortDescFirst: false,
	}),
	columnHelper.accessor(
		(row) =>
			row.players.length.toString() + row.players.map((p) => p.name).join(', '),
		{
			id: 'All Players',
			cell: (props) => {
				return join(
					props.row.original.players.map((p) =>
						p.url ? <a href={p.url}>{p.name}</a> : <>{p.name}</>
					),
					<>, </>
				);
			},
			//*/
		}
	),
	columnHelper.accessor('time_adj', {
		cell: ({
			row: {
				original: { time_adj_s },
			},
		}) => time_adj_s,
		header: 'Time (adjusted for player count and main dish)',
		sortDescFirst: false,
	}),
	columnHelper.accessor('verifyDate', {
		cell: (props) => (
			<a href={props.row.original.weblink}>
				{DateTime.fromISO(props.getValue()).toLocaleString(DateTime.DATE_FULL)}
			</a>
		),
		header: 'Verify Date',
		sortDescFirst: true,
	}),

	columnHelper.accessor('2lg135el', { header: 'Seed' }),
	columnHelper.accessor('wl3d19v8', { header: 'Dishes' }),
	columnHelper.accessor(
		(row) => {
			switch (row['wlekw94l']) {
				case 'Solo':
					return 1;
				case 'Duo':
					return 2;
				case 'Trio':
					return 3;
				case 'Quad':
					return 4;
				default:
					return 0;
			}
		},
		{
			header: 'Players',
			cell: (props) => props.row.original['wlekw94l'],
		}
	),
	columnHelper.accessor('5lyx19gn', { header: 'Seed' }),
	columnHelper.accessor('p855yjv8', { header: 'Patch' }),
	columnHelper.accessor('onv4xmwn', { header: 'Map scene' }),
	columnHelper.accessor('dishReduction', {
		header: 'Customer Modifier from Main',
		cell: (props) =>
			Number(0.85 ** props.getValue() - 1).toLocaleString(undefined, {
				style: 'percent',
				signDisplay: 'always',

				minimumFractionDigits: 2,
			}),
		invertSorting: true,
	}),
];

const Home = () => {
	const [processedRuns, setProcessedRuns] = useState(cachedProcessedRuns);
	useEffect(() => {
		processData().then(({ processedRuns }) => {
			console.log(JSON.stringify(processedRuns));
			setProcessedRuns(processedRuns);
		});
	}, []);

	const table = useReactTable<RowType>({
		data: processedRuns,
		columns: columnDefs,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		// getFilteredRowModel: getFilteredRowModel(),
		initialState: {
			sorting: [{ id: 'time_adj', desc: false }],
		},
	});
	return (
		<div class={style.home}>
			<h1>All PlateUp! Speedruns</h1>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<th key={header.id} colSpan={header.colSpan}>
										{header.isPlaceholder ? null : (
											<>
												<div
													{...{
														className: header.column.getCanSort()
															? 'cursor-pointer select-none'
															: '',
														onClick: header.column.getToggleSortingHandler(),
													}}
												>
													{flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
													{{
														asc: ' 🔼',
														desc: ' 🔽',
													}[header.column.getIsSorted() as string] ?? ' ⏹️'}
												</div>
											</>
										)}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => {
						return (
							<tr key={row.id}>
								{row.getVisibleCells().map((cell) => {
									return (
										<td key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

type PlayerProps = { player: PlayerData };
type PlayerData = {
	rel: string; //'guest' | 'user';
	id?: string;
	names?: { international: string | null; japanese: string | null };
	uri?: string;
	name?: string;
};

export default Home;
