const express = require('express');
const router = express.Router();




router.get('/student',(req,res)=>{
    res.send('way to register');
    res.end()
})

router.post('/student/add',(req,res)=>{
    console.log(req.body);
    res.json({
        sucess : true,
        text : "verified"
    })
})
router.get('/student/getDetail',(req,res)=>{
    res.send(req.body);
    res.end()
})


module.exports = router