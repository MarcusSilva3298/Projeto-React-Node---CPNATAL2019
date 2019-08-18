const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

//Configuração das Bibliotecas
    //Mongoose - Conexão com o Banco de Dados
        mongoose.connect('mongodb://localhost:27017/NoejHospital', { useNewUrlParser: true})
            .then( res => console.log('Banco Conectado!'))
            .catch( err => console.log(err));

    //Express - Passagem de dados
        server.use(express.urlencoded({extended: true}));
        server.use(express.json());
    
    //Morgan e Cors- Auxílio de Desenvolvimento
        server.use(morgan('dev'));
        server.use(cors());

    //EJS - Renderização de páginas
        server.set('view engine', 'ejs');
        server.set('views', 'src/views');
        server.use(expressLayouts);

//Configuração de rotas
    server.use(require('./routes'))

    server.listen(8000);