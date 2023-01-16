import 'preact/debug';
import { Fragment } from 'preact';
import { h } from 'preact';
import getRuns from '../../api';
import style from './style.css';
import { Duration, DateTime } from 'luxon';
import {
	useReactTable,
	createColumnHelper,
	getCoreRowModel,
	flexRender,
	getSortedRowModel,
	getFilteredRowModel,
} from '@tanstack/react-table';

import { formatOrdinals } from './utils';
const Space = ({ n }: { n: number }) => {
	let res = [<span> </span>];

	while (n--) {
		res.push(<span style={{ lineHeight: '22px' }}>&nbsp;</span>);
	}
	return <>{res}</>;
};
function join(array: h.JSX.Element[], separator: h.JSX.Element | string) {
	if (typeof separator === 'string') {
		separator = <>{separator}</>;
	}
	for (let i = array.length - 1; i > 0; i--) {
		array.splice(i, 0, separator);
	}
	return array;
}

const columns: VariableGroup[] = [
	'2lg135el', // set/random seed
	'wl3d19v8', // dishes
	'wlekw94l', // players
	'5lyx19gn', // seed
	'p855yjv8', // patch
	'onv4xmwn', // setting
];
// wl3d19v8
const dishVar = 'wl3d19v8';
const dishReductions = {
	'4lxnzzr1': 0,
	jqz3yeg1: 1,
	'0q5r66n1': -1,
	'5lejooz1': 0,
	'81wygg5q': -2,
	rqv877w1: 1,
	zqo40021: 1,
	'013g003l': -2,
	'5lm5yy4q': 0,
	'814zjjjl': 1,
};

//wlekw94l
const playersVar = 'wlekw94l';
const playerScale = {
	z19n33kq: 0.8,
	p127nnkq: 1,
	'81p9jjkq': 1.25,
	xqkvddyl: 1.5,
};
const leaderboardVariables = [];
const res = getRuns();
const runs = res.data.runs;
const variables = res.data.variables;
const playersData = res.data.players.data;
const players = {};
for (let a of playersData) {
	if (a.rel === 'guest') continue;
	players[a.id] = a.names.international ?? a.names.japanese;
}
let variableGroups = {}; // what to label the column
let labels = {}; // what is the label the id is associated with?
for (let type of variables.data) {
	variableGroups[type.id] = type.name;
	for (let dataKey of Object.keys(type.values.values)) {
		labels[dataKey] = type.values.values[dataKey].label;
	}
	if (type['is-subcategory']) {
		// use this variable to determine run placement.
		leaderboardVariables.push(type.id);
	}
}
let leaderboards = {};
// process runs
const processedRuns = runs
	.map((a) => {
		return a.run;
	})
	.map((a) => {
		let leaderboard = [a.category];
		for (let v of leaderboardVariables) {
			leaderboard.push(`${v}.${a.values[v]}`);
		}
		let leaderboardUrl =
			'https://www.speedrun.com/plateup?x=' + leaderboard.join('-');
		if (leaderboards[leaderboardUrl] === undefined)
			leaderboards[leaderboardUrl] = [];
		leaderboards[leaderboardUrl].push(a.times.primary_t);
		const place = leaderboards[leaderboardUrl].length;
		let adjustedTime = a.times.primary_t;
		let dishReduction = 0;
		for (let v in a.values) {
			if (v == dishVar) {
				dishReduction += dishReductions[a.values[v]];
				adjustedTime /= 0.85 ** dishReductions[a.values[v]];
			}
			if (v == playersVar) {
				adjustedTime /= playerScale[a.values[v]];
			}
		}
		return { ...a, leaderboardUrl, place, adjustedTime, dishReduction };
	})
	.sort((a, b) => a.adjustedTime - b.adjustedTime)
	.map(
		({
			place,
			players,
			weblink,
			leaderboardUrl,
			adjustedTime,
			times: { primary, primary_t },
			status: { 'verify-date': verifyDate },
			dishReduction,
			values,
			videos,
		}) => {
			let res = {
				place: formatOrdinals(place),
				players,
				weblink,
				leaderboardUrl,
				time_adj: adjustedTime,
				time_adj_s: Duration.fromMillis(adjustedTime * 1000).toISOTime(),
				time: primary_t,
				time_s: primary,
				verifyDate,
				dishReduction,
				videoUrl: videos.links[0].uri,
				...values,
			};
			for (let key of Object.keys(values)) {
				res[key] = labels[values[key]];
			}
			return res;
		}
	);
// add correct placement numbers
// add obsoleteness
// add scaled time data for dishes
// add scaled time data for players
// add scaled time data for dishes AND players
// add scaled time data for dishes, players, AND map-specific cards

type VariableGroup =
	| '2lg135el' // set/random seed
	| 'wl3d19v8' // dishes
	| 'wlekw94l' // players
	| '5lyx19gn' // seed
	| 'p855yjv8' // patch
	| 'onv4xmwn'; // setting;
type VariableInterface = {
	[a in VariableGroup]?: string;
};
type RowType = VariableInterface & {
	place: string;
	time_s: string;
	time: number;
	time_adj_s: string;
	time_adj: number;
	players: PlayerData[];
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
			row.players.length.toString() +
			row.players.map((p) => p.name ?? players[p.id]).join(', '),
		{
			id: 'All Players',
			cell: (props) => {
				return join(
					props.row.original.players.map((p) => <Player player={p} />),
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
	...columns.map((varGroup) =>
		columnHelper.accessor(varGroup, { header: variableGroups[varGroup] })
	),
	columnHelper.accessor('dishReduction', {
		header: 'Customer Modifier from Main',
		cell: (props) =>
			Number(0.85 ** props.getValue() - 1).toLocaleString(undefined, {
				style: 'percent',
				signDisplay: 'always',
				minimumFractionDigits: 2,
			}),
	}),
];
const table = {
	data: processedRuns,
};
// your body component (connected to the smart table)
// note the usage of the table hoc
const TableBody = ({ data }) => {
	return (
		<tbody>
			{data.map((a) => {
				return <Run run={a} />;
			})}
		</tbody>
	);
};

const Home = () => {
	const table = useReactTable<RowType>({
		data: processedRuns,
		columns: columnDefs,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
	});
	return (
		<div class={style.home}>
			<h1>All PlateUp! Speedruns</h1>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								if (header.id === 'All Players') debugger;
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

			{/* <table>
				<thead>
					<tr>
						<th>Place</th>
						<th>Time</th>
						<th>Verified</th>
						<th>Players</th>
						<th>Speedrun Leaderboard</th>
						{columns.map((a) => (
							<th>{variableGroups[a]}</th>
						))}
					</tr>
				</thead>
				<TableBody {...table} />

				{processedRuns.map((run) => (
					<Run run={run} />
				))}
			</table> */}
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
const Player = ({ player }: PlayerProps) =>
	player.rel === 'guest' ? (
		<>{player.name}</>
	) : (
		<a href={`https://www.speedrun.com/user/${players[player.id]}`}>
			{players[player.id]}
		</a>
	);

const Run = ({ run }) => {
	return (
		<tr>
			<td>
				<a href={run.leaderboardUrl}>{formatOrdinals(run.place)}</a>
			</td>
			<td>
				<a href={run.videos.links[0].uri}>
					{Duration.fromISO(run.times.primary).toISOTime()}
				</a>
			</td>
			<td>
				{DateTime.fromISO(run.status['verify-date']).toLocaleString(
					DateTime.DATE_FULL
				)}
			</td>
			<td>
				{join(
					run.players.map((a) => <Player player={a} />),
					', '
				)}
			</td>

			{columns.map((b) => (
				<td>{labels[run.values[b]]}</td>
			))}
		</tr>
	);
};

export default Home;
