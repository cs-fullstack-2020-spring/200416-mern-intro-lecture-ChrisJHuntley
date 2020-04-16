let express = require('express');
let router = express.Router();
router.use(express.json());
// let entryCollection = require('../models/EntrySchema')
// router.get('/', (req, res) => {
//     // res.send('all students')
//     entryCollection.create({},(errors, results)=>{
//         errors ? res.send(errors): res.send(results);
//         res.send('all')
//     })

// })
router.post('/', (req, res) => {
    // res.send('post method worked')
    // entryCollection.create(req.body, (errors,results)=>{
    //     errors ? res.send(errors): res.send(results);
    // });
    res.send('ADD')
})
module.exports = router;