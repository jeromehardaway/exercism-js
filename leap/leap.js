function isLeapYear(year) {
	function yearDivisibleBy(divisor) {
		return year % divisor === 0;
	}

	return yearDivisibleBy(4) &&
		(!yearDivisibleBy(100) ||
			yearDivisibleBy(400));
}

module.exports = isLeapYear;