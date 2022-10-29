const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'crud_node'
});

connection.connect((err)=>{
    if (!!err) {
        console.log(err);
    } else {
        console.log('Koneksi Berhasil');
    }
})

module.exports = connection;