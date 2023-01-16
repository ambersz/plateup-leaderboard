import { Duration, DateTime } from 'luxon';

import { formatOrdinals } from './utils';
import getRuns from '../../api';
export type VariableGroup =
	| '2lg135el' // set/random seed
	| 'wl3d19v8' // dishes
	| 'wlekw94l' // players
	| '5lyx19gn' // seed
	| 'p855yjv8' // patch
	| 'onv4xmwn'; // setting;
export type VariableInterface = {
	[a in VariableGroup]?: string;
};

export const variableGroups: { [key in VariableGroup]: string } = {
	'2lg135el': 'Seed',
	wl3d19v8: 'Dishes',
	wlekw94l: 'Players',
	'5lyx19gn': 'Seed',
	p855yjv8: 'Patch',
	onv4xmwn: 'Map scene',
}; // what to label the column
export const variableColumns: VariableGroup[] = [
	'2lg135el', // set/random seed
	'wl3d19v8', // dishes
	'wlekw94l', // players
	'5lyx19gn', // seed
	'p855yjv8', // patch
	'onv4xmwn', // setting
];
async function processData() {
	// return [processedRuns, bariableLabels, players]

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
	const res = await getRuns();
	const runs = res.data.runs;
	const variables = res.data.variables;
	const playersData = res.data.players.data;
	const playersIDtoName = {};
	for (let a of playersData) {
		if (a.rel === 'guest') continue;
		playersIDtoName[a.id] = a.names.international ?? a.names.japanese;
	}

	let labels = {}; // what is the label the id is associated with?
	for (let type of variables.data) {
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
					players: players.map((p) => ({
						url:
							p.rel === 'user' &&
							`https://www.speedrun.com/user/${players[p.id]}`,
						name: p.name ?? playersIDtoName[p.id],
					})),
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
	return { processedRuns, labels, players: playersIDtoName };
}
export default processData;
