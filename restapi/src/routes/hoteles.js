const { Router} = require('express');
const router = Router();
const hoteles = require('../hoteles.json');
const underscore = require('underscore');

router.get('/', (req, res) => {
    res.send(hoteles);
});

router.post('/', (req, res) => {
    const { HotelName, Categoria, Precio, Calificacion } = req.body;

    if ( HotelName && Categoria && Precio && Calificacion ){
        const HotelID = hoteles.length + 1;
        const newHotel = {HotelID, ...req.body};
        hoteles.push(newHotel);
        res.json(hoteles);
    }else{
        res.status(500).json({ error : '500 Error Interno del Servidor.'});
    }
    
});

router.delete('/:HotelID', (req, res) => {
    const { HotelID } = req.params;
    underscore.each(hoteles, (hotel, i) => {
        if (hotel.HotelID == HotelID){
            hoteles.splice(i, 1);
        }
    });
    res.json(hoteles);
});

router.put('/:HotelID', (req, res) => {
    const { HotelID } = req.params;
    const { HotelName, Categoria, Precio, Calificacion } = req.body;

    if ( HotelName && Categoria && Precio && Calificacion ){
        underscore.each(hoteles, (hotel, i) => {
            if (hotel.HotelID == HotelID){
                hotel.HotelName = HotelName;
                hotel.Categoria = Categoria;
                hotel.Precio = Precio;
                hotel.Calificacion = Calificacion;                
            }
        });
        res.json(hoteles);
    }else{
        res.status(500).json({ error : '500 Error Interno del Servidor.'});
    }
});

module.exports = router;