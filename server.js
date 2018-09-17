const express = require('express');

const app = express();
const port = process.env.PORT || 5004;

app.get('/api/phones', (request, response) => {
    let phones = [
        {
            id: 1,
            title: 'Apple iPhone 7 32 GB',
            description: 'Pantalla LCD - 1334 x 750 píxeles - color - 4.7" - 326 ppi - Retina HD display with IPS technology - revestimiento oleofóbico resistente a las huellas dactilares',
            color: 'Oro',
            price: '529',
            image: './client/src/images/iphone_7_oro.jpg',
            SO: 'IOS 10'
            
        },
        {
            id: 2,
            title: 'Samsung Galaxy S7 Edge 5,5" 4GB',
            description: 'Pantalla OLED - 2560 x 1440 píxeles - color - 5.5" - 534 ppi - Quad HD Super AMOLED',
            color: 'Plata',
            price: '369',
            image: './client/src/images/Samsung_Galaxy_s7_Edge_plata.jpg',
            SO: 'Google Android'
        },
        {
            id: 3,
            title: 'Huawei P Smart 5.6" 32GB',
            description: 'Pantalla 5,6" FullHD+ (2.160 x 1.080) 18:9 - Kirin 659 Octa-core Cortex A53 (8 núcleos) a 2,36 GHz',
            color: 'Oro',
            price: '195',
            image: './client/src/images/Huawei_P_Smart_32gb.jpg',
            SO: 'Android 8.0 Oreo EMUI 8.0'
        },
        {
            id: 4,
            title: 'Apple iPhone 8 64GB Gris espacial',
            description: 'Pantalla Retina HD Pantalla panorámica LCD Multi - Touch de 4, 7 pulgadas(en diagonal) con tecnología IPS - Resolución de 1.334 por 750 píxeles a 326 p / p Contraste de 1.400: 1(típico) Brillo máximo 625 cd / m2 True Tone, 3D Touch',
            color: 'Gris espacial',
            price: '689',
            image: './client/src/images/iPhone_8_64GB_Gris.jpg',
            SO: 'Android 8.0 Oreo EMUI 8.0'
        },
        {
            id: 5,
            title: 'Samsung Galaxy S8 5,8" 64GB',
            description: 'Pantalla OLED - 2960 x 1440 píxeles - color - 5.8" - 570 ppi - Quad HD+ Super AMOLED',
            color: 'Negro',
            price: '455',
            image: './client/src/images/Samsung_Galaxy_S8.jpg',
            SO: 'Android 7.0 Nougat'
        },
        {
            id: 6,
            title: 'Honor 10 5,8" 128GB',
            description: 'Pantalla LCD - 2280 x 1080 píxeles - color - 5.84" - 432 ppi - 19:9 - LTPS',
            color: 'Azul',
            price: '410',
            image: './client/src/images/Honor_10.jpg',
            SO: 'Android 8.1 Oreo con HUAWEI Emotion UI 8.1'
        }
    ];
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(phones));

    // res.send({ express: 'Trayendo datos desde express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));