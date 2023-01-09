// code your solution here
const saturdayFun = function (activity = "roller-skate") {
	return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function (activity = "go to the office") {
	return `This Monday, I will ${activity}.`;
};

const wrapAdjective = function (symbol) {
	const innerFunc = function (input = "special") {
		return `You are ${symbol}${input}${symbol}!`;
	};
	return innerFunc;
};
