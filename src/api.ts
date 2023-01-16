// https://www.speedrun.com/api/v1/leaderboards/yd4kq3k6/category/z275n0gk
import mockresponse from './mockresponse.json';
import srcTypes from 'src-ts/lib/types';

const getRuns = async () => {
	return (
		await fetch(
			'https://www.speedrun.com/api/v1/leaderboards/yd4kq3k6/category/z275n0gk?embed=variables,players'
		)
	).json();
	return mockresponse;
};

export default getRuns;
