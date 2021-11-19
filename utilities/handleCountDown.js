import moment from 'moment';

/**
 * 
 * @param duration : moment
 * @returns {day: ['1', '2'], hour: ['1', '9'], minute: ['3', '2']}
 * '9:8:1' is 9h08m01s -> {day: ['0', 9], hour: ['0', '8'], minute: ['0', '1']}
 * '19:29:15' is 9h08m01s -> {day: ['1', 9], hour: ['2', '9'], minute: ['1', '5']}
 */

export const handleCountDown = endDate => {
	const expirationDate = moment(new Date(endDate).toISOString());
	const now = moment();
	const countdown = moment(expirationDate - now);
	const duration = moment.duration(countdown, 'milliseconds');
	
	// Day - hour - minute
	const day = duration.days();
	const hour = duration.hours();
	const minute = duration.minutes();
	const second = duration.seconds();

	const dayFormated = day.toString().split('');
	const hourFormated = hour.toString().split('');
	const minuteFormated = minute.toString().split('');
	const secondFormated = second.toString().split('');

	if (dayFormated.length <= 1) {
		dayFormated.unshift('0');
	}
	if (hourFormated.length <= 1) {
		hourFormated.unshift('0');
	}
	if (minuteFormated.length <= 1) {
		minuteFormated.unshift('0');
	}

	if (secondFormated.length <= 1) {
		secondFormated.unshift('0');
	}

	return {
		day    : dayFormated,
		hour   : hourFormated,
		minute : minuteFormated,
		second : secondFormated,
	};
};
