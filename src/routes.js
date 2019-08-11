const router = require('express').Router();
const Patient = require('./models/models');

router.route('/')
    .get((req, res) =>{
        Patient.find({name: req.body.name})
            .then(response => res.render('home', {data: response}) )
            .catch( err => console.log(err))
    })

    
    .post((req,res) => {
        const { name } = req.body;
        const { age } = req.body;
        const { hp } = req.body;
        const { medic } = req.body;
        const { status } = req.body;
        const { hid } = req.body;
        const NewPatient = new Patient({
            name: name,
            age: age,
            hp: hp,
            medic: medic,
            status: status,
            hid: hid
        });
        NewPatient.save();
        res.redirect('/');
    })

/*
router.route('/:id')
    .get((req, res, next) =>{
        Patient.findOne({id:req.params.id})
            .then(response =>{ res.render('item', {data: response})})
            .catch(err => console.log(err))
    })

    .delete(req, res, next =>{
        Patient.findByIdAndDelete(req.params.id)
            .then(response => console.log ('Deletado'))
            .catch(err => console.log(err));
        res.redirect('/')
    })
    */
module.exports = router;