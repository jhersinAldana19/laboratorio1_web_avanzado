const router = require('express').Router()

router.get('/',(req,res)=>{
    res.sendFile('./static/Inicio.html',{
        root:__dirname
    })
})

router.get('/contactenos',(req,res)=>{
    res.sendFile('./static/Contactenos.html',{
        root:__dirname
    })
})

router.get('/equipo',(req,res)=>{
    res.sendFile('./static/Equipo.html',{
        root:__dirname
    })
})

router.get('/marcas',(req,res)=>{
    res.sendFile('./static/Marcas.html',{
        root:__dirname
    })
})

router.get('/nosotros',(req,res)=>{
    res.sendFile('./static/Nosotros.html',{
        root:__dirname
    })
})

router.get('/productos',(req,res)=>{
    res.sendFile('./static/Productos.html',{
        root:__dirname
    })
})

router.get('/servicios',(req,res)=>{
    res.sendFile('./static/Servicios.html',{
        root:__dirname
    })
})

module.exports = router;