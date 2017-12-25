const passport = require('passport');

function initStartagies() {
	require('./fb-login')(passport);
	require('./google-login')(passport);
}
module.exports = {
	passport: passport,
	initStartagies: initStartagies
}