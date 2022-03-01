const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
var bodyParser = require('body-parser')

const db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	database : 'junglepro'
});

db.connect((err) =>{
	if(err){
		throw err;
	}
	console.log('db connected');
})

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

app.post('/adddetails', (req, res) => {
	console.log(req.body);
	let posts = {name: req.body.fullname, email: req.body.email, password: req.body.password, phn: req.body.phn, country: req.body.country, city: req.body.city, state: req.body.state, zip: req.body.zip};
	let sql = 'INSERT INTO details SET ?';
	db.query(sql, posts, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send(result);
	})
})

app.post('/addpackage', (req, res) => {
	console.log(req.body);
	let posts = {type: req.body.packageType, length: req.body.length, breadth: req.body.breadth, weight: req.body.weight, pick: req.body.pick, drop: req.body.drop, altPhn: req.body.altPhn, picture: req.body.picture, status: 'ordered'};
	let sql = 'INSERT INTO package SET ?';
	db.query(sql, posts, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send(result);
	})
})	

app.get('/getdetails/', (req, res) => {
	let sql = 'SELECT * FROM details';
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send(result);
	})
})

app.get('/selectpackage/:id', (req, res) => {
	let sql = `SELECT * FROM package where trackingId = ${req.params.id}`;
	db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
		res.send(result);
	})
})

 
app.listen('3000', () => {
	console.log('server started')
});




