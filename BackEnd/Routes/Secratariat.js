const express = require('express');
const mysql = require('mysql2');
const connection = require('../connection');
const Router = express.Router();
date = new Date();
date = date = new Date();
date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
console.log(date)
//Secratariet 
Router.post('/Login', (req, res) => {
    Login = req.body;
    sql = `select * from secretariatsconstituencymandalwise where SECRETARIAT_CODE = ${Login.Username}`;
    connection.query(sql, (err, result) => {
        if (err) {
            res.send({
                Message: "Connection Failed!",
                err: err
            });
        }
        else {
            res.send(result[0]);
        }
    });
});
// ................get data.module............................


Router.get('/getdata/:Mandal', (req, res) => {
    Mandal = req.params.Mandal;
    if (Mandal.toLowerCase() == "palnadu") {
        districtcount = `select * from palnadudistict.workdetails left join palnadudistict.primarydetails on palnadudistict.workdetails.Connection_to_Work = palnadudistict.primarydetails.Connection_to_Work where Mandal_Key_work REGEXP '^M'`
        connection.query(districtcount, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                var length = result.length;
                work = {
                    "Shop_Pvt": 0,
                    "Railway_Station": 0,
                    "Hotels": 0,
                    "Begging": 0,
                    "Brick_Klins": 0,
                    "Factories": 0,
                    "Construction_Works": 0,
                    "others": 0
                }
                for (i = 0; i < result.length; i++) {
                    if (result[i].Type_of_Work.toLowerCase() == "Hotels".toLowerCase()) {
                        work.Hotels += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Shop_Pvt".toLowerCase()) {
                        work.Shop_Pvt += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Railway_Station".toLowerCase()) {
                        work.Railway_Station += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Begging".toLowerCase()) {
                        work.Begging += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Brick_Klins".toLowerCase()) {
                        work.Brick_Klins += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Factories".toLowerCase()) {
                        work.Factories += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Construction_Works".toLowerCase()) {
                        work.Construction_Works += 1
                    }
                    else {
                        work.others += 1
                    }
                }
                res.send([result, length, work]);
            }
        })
    }
    else {
        WorkTable = `select * from palnadudistict.workdetails left join palnadudistict.primarydetails on palnadudistict.workdetails.Connection_to_Work = palnadudistict.primarydetails.Connection_to_Work where Mandal_Key_work REGEXP '^${Mandal}'`;
        connection.query(WorkTable, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                work = {
                    "Shop_Pvt": 0,
                    "Railway_Station": 0,
                    "Hotels": 0,
                    "Begging": 0,
                    "Brick_Klins": 0,
                    "Factories": 0,
                    "Construction_Works": 0,
                    "others": 0
                }
                for (i = 0; i < result.length; i++) {
                    if (result[i].Type_of_Work.toLowerCase() == "Hotels".toLowerCase()) {
                        work.Hotels += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Shop_Pvt".toLowerCase()) {
                        work.Shop_Pvt += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Railway_Station".toLowerCase()) {
                        work.Railway_Station += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Begging".toLowerCase()) {
                        work.Begging += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Brick_Klins".toLowerCase()) {
                        work.Brick_Klins += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Factories".toLowerCase()) {
                        work.Factories += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Construction_Works".toLowerCase()) {
                        work.Construction_Works += 1
                    }
                    else {
                        work.others += 1
                    }
                }
                res.send({ Work: work, Result: result });
            }
        });
    }
});


Router.get('/getdataBydate/:Mandal', (req, res) => {
    date = new Date();
    date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    Mandal = req.params.Mandal;
    if (Mandal.toLowerCase() == "palnadu") {
        districtcount = `select * from palnadudistict.workdetails left join palnadudistict.primarydetails on palnadudistict.workdetails.Connection_to_Work = palnadudistict.primarydetails.Connection_to_Work where Mandal_Key_work REGEXP '^M' and palnadudistict.primarydetails.Date = '${date}'`
        connection.query(districtcount, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                var length = result.length;
                work = {
                    "Shop_Pvt": 0,
                    "Railway_Station": 0,
                    "Hotels": 0,
                    "Begging": 0,
                    "Brick_Klins": 0,
                    "Factories": 0,
                    "Construction_Works": 0,
                    "others": 0
                }
                for (i = 0; i < result.length; i++) {
                    if (result[i].Type_of_Work.toLowerCase() == "Hotels".toLowerCase()) {
                        work.Hotels += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Shop_Pvt".toLowerCase()) {
                        work.Shop_Pvt += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Railway_Station".toLowerCase()) {
                        work.Railway_Station += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Begging".toLowerCase()) {
                        work.Begging += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Brick_Klins".toLowerCase()) {
                        work.Brick_Klins += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Factories".toLowerCase()) {
                        work.Factories += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Construction_Works".toLowerCase()) {
                        work.Construction_Works += 1
                    }
                    else {
                        work.others += 1
                    }
                }
                res.send([result, length, work]);
            }
        })
    }
    else {
        WorkTable = `select * from palnadudistict.workdetails left join palnadudistict.primarydetails on palnadudistict.workdetails.Connection_to_Work = palnadudistict.primarydetails.Connection_to_Work where Mandal_Key_work REGEXP '^${Mandal}' and palnadudistict.primarydetails.Date = '${date}'`;
        connection.query(WorkTable, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                work = {
                    "Shop_Pvt": 0,
                    "Railway_Station": 0,
                    "Hotels": 0,
                    "Begging": 0,
                    "Brick_Klins": 0,
                    "Factories": 0,
                    "Construction_Works": 0,
                    "others": 0
                }
                for (i = 0; i < result.length; i++) {
                    if (result[i].Type_of_Work.toLowerCase() == "Hotels".toLowerCase()) {
                        work.Hotels += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Shop_Pvt".toLowerCase()) {
                        work.Shop_Pvt += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Railway_Station".toLowerCase()) {
                        work.Railway_Station += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Begging".toLowerCase()) {
                        work.Begging += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Brick_Klins".toLowerCase()) {
                        work.Brick_Klins += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Factories".toLowerCase()) {
                        work.Factories += 1
                    }
                    else if (result[i].Type_of_Work.toLowerCase() == "Construction_Works".toLowerCase()) {
                        work.Construction_Works += 1
                    }
                    else {
                        work.others += 1
                    }
                }
                res.send({ Work: work, Result: result });
            }
        });
    }
});



Router.post('/getdata/Mandal/Presised/', (req, res) => {
    Target = req.body;
    if (Target.Mandal.toLowerCase() == "palnadu") {
        Prescribed = `select * from palnadudistict.workdetails left join palnadudistict.primarydetails on palnadudistict.workdetails.Connection_to_Work = palnadudistict.primarydetails.Connection_to_Work where Type_of_Work = '${Target.Value}'`;
        connection.query(Prescribed, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(result);
            }
        });
    }
    else {
        Prescribed = `select * from palnadudistict.workdetails left join palnadudistict.primarydetails on palnadudistict.workdetails.Connection_to_Work = palnadudistict.primarydetails.Connection_to_Work where Mandal_Key_work REGEXP '^${Target.Mandal}' and Type_of_Work = '${Target.Value}'`;
        connection.query(Prescribed, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {

                res.send(result);
            }
        });
    }
})


Router.post('/Getdata/Getindetail', (req, res) => {
    uniqueid = req.body;
    sql = `select * from palnadudistict.primarydetails inner join palnadudistict.workdetails on palnadudistict.primarydetails.Connection_to_Work = palnadudistict.workdetails.Connection_to_Work inner join palnadudistict.studydetails on palnadudistict.primarydetails.connection_to_work = palnadudistict.studydetails.connection_to_Work inner join palnadudistict.disability on palnadudistict.primarydetails.connection_to_work = palnadudistict.disability.Connection_to_Work inner join palnadudistict.requirementsdetails on palnadudistict.primarydetails.connection_to_work = palnadudistict.requirementsdetails.Connection_to_Work where palnadudistict.primarydetails.connection_to_work = ${uniqueid.id}`
    connection.query(sql, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            var details = result;
            sql = `select * from secretariatsconstituencymandalwise where Mandal_Key = '${details[0].MandalKey}'`
            connection.query(sql, (err, result) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send({
                        SecratariatDetails:result[0],
                        Primraydetails:details[0]
                    });
                }
            });
        }
    })
})
Router.post('/getdata/Mandal/PresisedBydate/', (req, res) => {
    date = new Date();
    date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    Target = req.body;
    if (Target.Mandal.toLowerCase() == "palnadu") {
        Prescribed = `select * from palnadudistict.workdetails left join palnadudistict.primarydetails on palnadudistict.workdetails.Connection_to_Work = palnadudistict.primarydetails.Connection_to_Work where Type_of_Work = '${Target.Value}' and palnadudistict.primarydetails.Date = '${date}'`;
        connection.query(Prescribed, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(result);
            }
        });
    }
    else {
        Prescribed = `select * from palnadudistict.workdetails left join palnadudistict.primarydetails on palnadudistict.workdetails.Connection_to_Work = palnadudistict.primarydetails.Connection_to_Work where Mandal_Key_work REGEXP '^${Target.Mandal}' and Type_of_Work = '${Target.Value}' and palnadudistict.primarydetails.Date = ${date}`;
        connection.query(Prescribed, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(result);
            }
        });
    }
});

module.exports = Router;
