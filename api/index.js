const MONGOOSE_KEY =
	'mongodb+srv://devjasoncameron:7*WQY*RmqwQWHCRpU.@cluster0.3pzfreh.mongodb.net/?retryWrites=true&w=majority';

const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGOOSE_KEY);

app.post('/register', async (req, res) => {
	const { username, password } = req.body;
	const userDoc = await User.create({ username, password });
	res.json(userDoc);
});

app.listen(4000);
