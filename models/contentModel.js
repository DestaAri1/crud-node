module.exports = {
    fetchData: (db,callback) => {
        db.query("SELECT * FROM content", callback)
    },
    getById: (db, id, callback) => {
        db.query("SELECT * FROM content where id= " + id, callback)
    },
    insertData:(db, data, callback) =>{
        db.query("INSERT INTO content SET ?", data, callback)
    },
    updateData:(db, id, data, callback) => {
        db.query("UPDATE content set ? where id = " + id, data, callback)
    },
    deleteData:(db, id, callback) => {
        db.query("DELETE from content where id = " + id, callback)}
}
