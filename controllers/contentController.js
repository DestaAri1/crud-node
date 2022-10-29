const Content = require('../models/contentModel');

module.export = {
    index: (req,res) => {
        Content.fetchData(req.db, (err, rows)=>{
            if (err) {
                req.flash('error', `${error.massage}`)
                res.render('content/index', {data : ''})
            } else {
                req.render('content/index', {data:rows})
            }
        })
    }
}