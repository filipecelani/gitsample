var express = require('express');
var route = express.Router();
route.get('/',function(req,res){
    const operacoes = [
        {
            title : 'soma',
            desc : 'soma de 2 dígitos',
            sample : 'a + b = c'
        },
        {
            title: 'sub',
            desc: 'subtração entre 2 dígitos',
            sample: 'a - b = c'
        },
    ];
    res.render('calculadora',{
        operacoes: operacoes
    });
});
const _hasValue = function(value){
    return value !== undefined && value !== null;
};

route.get('/soma',function(req,res){
    var a = req.query.a;
    var b = req.query.b;
    if(!_hasValue(a)){
        res.status(400).json({
            error : 'a has no value'
        });
        return;
    }
    a = parseInt(a);

    if (!_hasValue(b)) {
        res.status(400).json({
            error: 'b has no value'
        });
        return;
    }
    b = parseInt(b);
    res.json({
        result : a+b
    });
});

route.get('/sub', function (req, res) {
    var a = req.query.a;
    var b = req.query.b;
    if (!_hasValue(a)) {
        res.status(400).json({
            error: 'a has no value'
        });
        return;
    }
    a = parseInt(a);

    if (!_hasValue(b)) {
        res.status(400).json({
            error: 'b has no value'
        });
        return;
    }
    b = parseInt(b);
    res.json({
        result: a - b
    });
});
module.exports = route;