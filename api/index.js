const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');

// SEC
const saltRounds = 10;
const secret = 'asdfasdfasdfasdf';

// APP FUN
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());

// CON MON
mongoose.connect(
	'mongodb+srv://devjasoncameron:   @blogcluster.suor1fn.mongodb.net/?retryWrites=true&w=majority'
);

// REG
app.post('/register', async (req, res) => {
	const { username, password } = req.body;

	try {
		const userDoc = await User.create({
			username,
			password: bcrypt.hashSync(password, saltRounds),
		});
		res.json(userDoc);
	} catch (e) {
		res.status('400').json(e);
	}
});

// LOGN
app.post('/login', async (req, res) => {
	const { username, password } = req.body;
	const userDoc = await User.findOne({ username });

	const checkPass = bcrypt.compareSync(password, userDoc.password); // First password from request, Second is from the DB

	if (checkPass) {
		jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
			if (err) throw err;
			res.cookie('token', token).json('ok');
		});
	} else {
		res.status(400).json('wrong credentials');
	}
});

app.listen(4000);
