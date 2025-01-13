const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7324*Tan',
    database: 'do_an_congngheWeb'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } 
        console.log('Connected to MySQL');
})