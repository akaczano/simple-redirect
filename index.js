const express = require('express');
const app = express();
let port = process.env.PORT;
port = port ? port : 5000;

app.get('/*', (req, res) => {
	res.redirect('http://www.reserve-stthomas.com');
});

app.listen(port, () => {
	console.log('App is running');
});
