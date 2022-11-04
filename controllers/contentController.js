const Content = require('../models/contentModel.js');


module.exports = {
    index: (req,res) => {
        Content.fetchData(req.db, (err, rows)=>{
            if (err) {
                req.flash('error', `${err.message}`)
                res.render('content/index', {data : ''})
            } else {
                res.render('content/index', {data: rows });
            }
        })
    },
    store: (req, res) => {
        const { title, deskripsi, body } = req.body;
        var form_data = {
            title,
            deskripsi,
            body,
        }

        Content.insertData(req.db, form_data, (err, result) =>{
            if (err) {
                req.flash('error', `${err.message}`);
                res.redirect('/content');
            } else {
                req.flash('success', 'Data Berhasil Ditambahkan');
                res.redirect('/content');
            }
        })
    },
    update: (req,res) => {
        const { id, title, deskripsi, body} = req.body
        var form_data = {
            id,
            title, 
            deskripsi, 
            body
        }

        Content.updateData(req.db, id, form_data, (err, result) => {
            if (err) {
                req.flash('error', `${err.message}`);
                res.redirect('/content')
            } else {
                req.flash('success', 'Data Berhasil DiUpdate')
                res.redirect('/content')
            }
        })
    },
    delete: (req, res) => {
        const { id } = req.params;
        Content.deleteData(req.db, id, (err, result) => {
            if (err) {
                req.flash('error', `${err.message}`)
                res.redirect('/content')
            } else {
                req.flash('success', 'Data Berhasil Dihapus')
                res.redirect('/content')
            }
        })
    }
}
