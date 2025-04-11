const express = require('express');
const mysql = require('mysql2');
const mongoose = require('mongoose');
const app = express();

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  
    password: '0505',  
    database: 'company_db'  
});

// MySQL 연결 확인 함수
function verifyMySQLConnection() {
    mysqlConnection.connect((err) => {
        if (err) {
            console.error('MySQL connection error: ' + err.stack);
            return;
        }
        console.log('MySQL connection success: id ' + mysqlConnection.threadId);
    });
}

mongoose.connect('mongodb://127.0.0.1:27017/companyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connection success');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});


const projectSchema = new mongoose.Schema({
    name: String,
    budget: Number
});

const Project = mongoose.model('Project', projectSchema);


app.get('/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, results) => {
        if (err) {
            res.status(500).send('MySQL error');
            return;
        }
        res.json(results);
    });
});


app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json(projects);
    } catch (err) {
        res.status(500).send('MongoDB error');
    }
});

app.listen(3000, () => {
    console.log('processing on the port 3000');
    verifyMySQLConnection();
});
