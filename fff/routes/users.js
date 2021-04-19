const express = require('express')
const router = express.Router()
const Alien = require('../models/user')


router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})
//find one

router.get('/tutorials/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(id)
           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})

//create user
router.post('/', async(req,res) => {
    const alien = new Alien({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.put('/tutorials/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.title = req.body.title;
        alien.desciption = req.body.description;
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.sub = req.body.sub
        const a1 = await alien.delete()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/', async(req,res) => {
    try{
           const aliens = await Alien.deleteMany()
           res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})




module.exports = router