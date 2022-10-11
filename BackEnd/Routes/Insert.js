const express = require('express');
const connection = require('../connection');
const mysql = require('mysql2');
const Router = express.Router();

Router.post('/Details', (req, res) => {
    Details = req.body;
    SerialKeyQuery = `SELECT Mandal_Key FROM secretariatsconstituencymandalwise where SECRETARIAT_CODE = '${Details.SECRETARIAT_CODE}'`
    connection.query(SerialKeyQuery, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const randomUnique = (range, count) => {
                let nums = new Set();
                while (nums.size < count) {
                    nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
                }
                return [...nums];
            }
            const UniqueNumber = randomUnique(1000000, 1);
            date = new Date();
            date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            Object.assign(Details, result[0]);
            PrimaryDetails = `INSERT INTO PrimaryDetails VALUES(${UniqueNumber[0]},'${Details.Name}','${Details.Age}','${Details.Father_Name}','${Details.Mother_Name}','${Details.Guardian}','${Details.Gender}','${Details.Mandal_Key}', '${date}')`;
            connection.query(PrimaryDetails, (err, result) => {
                if (err) {
                    res.send({
                        err: err,
                        Message: "Failed at Primary Details" + UniqueNumber[0]
                    })
                }
                else {
                    WorkDetails = `INSERT INTO WorkDetails VALUES('${Details.Father_Work}','${Details.Mother_Work}','${Details.Cast}','${Details.Religion}','${Details.Type_of_Work}','${Details.Mandal_Key}',${UniqueNumber[0]})`
                    connection.query(WorkDetails, (err, result) => {
                        if (err) {
                            res.send({
                                err: err,
                                Message: "Failed at Work Details" + UniqueNumber[0]
                            })
                        }
                        else {
                            StudyDetails = `INSERT INTO  studydetails VALUES('${Details.Mandal_Key}','${Details.SchoolJoined}','${Details.StudiedClass}','${Details.ClasstobeAdmitted}','${Details.Nearest_School}',${UniqueNumber[0]},'${Details.SchoolAddress}')`;
                            connection.query(StudyDetails, (err, result) => {
                                if (err) {
                                    res.send({
                                        err: err,
                                        Message: "Failed at Study Details" + UniqueNumber[0]
                                    })
                                }
                                else {
                                    disabilityDetails = `INSERT INTO disability VALUES(${UniqueNumber[0]},'${Details.Mandal_Key}','${Details.MentallyRetired}','${Details.DeafandDumb}','${Details.InheritedDisabilities}','${Details.PovertyandMalnutration}','${Details.Physicallyhandycapped}')`;
                                    connection.query(disabilityDetails, (err, result) => {
                                        if (err) {
                                            res.send({
                                                err: err,
                                                Message: "Failed at disability Details" + UniqueNumber[0]
                                            })
                                        }
                                        else {
                                            RequirementsDetails = `INSERT INTO requirementsdetails VALUES('${Details.Ration}','${Details.Aadhar}','${Details.LivingRequirements}','${Details.Mandal_Key}',${UniqueNumber[0]})`;
                                            connection.query(RequirementsDetails, (err, result) => {
                                                if (err) {
                                                    res.send({
                                                        err: err,
                                                        Message: "Failed at requirements Details" + UniqueNumber[0]
                                                    })
                                                }
                                                else {
                                                    res.send({
                                                        Message: "All the records are recorded successfully.",
                                                        UniqueIdOfthePerson: UniqueNumber[0]
                                                    })
                                                }
                                            });
                                        }
                                    })
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});



module.exports = Router;