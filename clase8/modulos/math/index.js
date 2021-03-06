var express = require('express');
const math = require("./math");
var router = express.Router();


//var res = math.suma(2,3);
//Forma correcta de llamar una funcion, es la manera asicronica, por eso hay 3 formas.

//collback
router.get('/sumasCollback/:num1-:num2', function (req, res, next) {
    var num1 = Number(req.params.num1);
    var num2 = Number(req.params.num2);

    math.suma(num1, num2)
        .then(data => {
            return Promise.reject("Ejemplo reject promesa");//math.resta(10, data);
        })
        .then(data => {
            math.division(2, data, (err, data) => {
                if (err) {
                    res.send("Error Division");
                    return;
                }
                math.multiplicacion(20, data, (err, data) => {
                    res.send("Resultado: " + data);
                });
            });
        })
        .catch(e => {
            res.send(e);
        })
});

//Promise
router.get('/sumasPromise/:num1-:num2', function (req, res, next) {
    var num1 = Number(req.params.num1);
    var num2 = Number(req.params.num2);

    math.suma(num1, num2)
        .then(data => {
            return Promise.reject("Ejemplo reject promesa");//math.resta(10, data);
        })
        .then(data => {
            math.division(2, data, (err, data) => {
                if (err) {
                    res.send("Error Division");
                    return;
                }
                math.multiplicacion(20, data, (err, data) => {
                    res.send("Resultado: " + data);
                });
            });
        })
        .catch(e => {
            res.send(e);
        })
});

//Event
router.get('/sumasEvent/:num1-:num2', function (req, res, next) {
    var num1 = Number(req.params.num1);
    var num2 = Number(req.params.num2);

    math.suma(num1, num2)
        .then(data => {
            return Promise.reject("Ejemplo reject promesa");//math.resta(10, data);
        })
        .then(data => {
            math.division(2, data, (err, data) => {
                if (err) {
                    res.send("Error Division");
                    return;
                }
                math.multiplicacion(20, data, (err, data) => {
                    res.send("Resultado: " + data);
                });
            });
        })
        .catch(e => {
            res.send(e);
        })
});


module.exports = router;

