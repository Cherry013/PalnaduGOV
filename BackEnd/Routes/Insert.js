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
            Details = Object.assign(Details, result[0]);
            Connection_to_Work = `SELECT AUTO_INCREMENT AS Connection_to_Work FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'palnadudistict' AND TABLE_NAME = 'primarydetails'`;
            connection.query(Connection_to_Work, (err, result) => {
                if (err) {
                    res.send(err)
                }
                else {
                    Details = Object.assign(Details, result[0]);
                    PrimaryDetails = `INSERT INTO PrimaryDetails VALUES(${Details.Connection_to_Work},'${Details.Name}','${Details.Age}','${Details.Father_Name}','${Details.Mother_Name}','${Details.Guardian}','${Details.Gender}','${Details.Mandal_Key}', current_timestamp())`;
                    connection.query(PrimaryDetails, (err, result) => {
                        if (err) {
                            res.send({
                                err: err,
                                Message: "Failed at Primary Details"
                            })
                        }
                        else {
                            WorkDetails = `INSERT INTO WorkDetails VALUES('${Details.Father_Work}','${Details.Mother_Work}','${Details.Cast}','${Details.Religion}','${Details.Type_of_Work}','${Details.Mandal_Key}',${Details.Connection_to_Work})`
                            connection.query(WorkDetails, (err, result) => {
                                if (err) {
                                    res.send({
                                        err: err,
                                        Message: "Failed at Work Details"
                                    })
                                }
                                else {
                                    StudyDetails = `INSERT INTO  studydetails VALUES('${Details.Mandal_Key}','${Details.SchoolJoined}','${Details.StudiedClass}','${Details.ClasstobeAdmitted}','${Details.Nearest_School}',${Details.Connection_to_Work},'${Details.SchoolAddress}')`;
                                    connection.query(StudyDetails, (err, result) => {
                                        if (err) {
                                            res.send({
                                                err: err,
                                                Message: "Failed at Study Details"
                                            })
                                        }
                                        else {
                                            disabilityDetails = `INSERT INTO disability VALUES(${Details.Connection_to_Work},'${Details.Mandal_Key}','${Details.MentallyRetired}','${Details.DeafandDumb}','${Details.InheritedDisabilities}','${Details.PovertyandMalnutration}','${Details.Physicallyhandycapped}')`;
                                            connection.query(disabilityDetails, (err, result) => {
                                                if (err) {
                                                    res.send({
                                                        err: err,
                                                        Message: "Failed at disability Details"
                                                    })
                                                }
                                                else {
                                                    RequirementsDetails = `INSERT INTO requirementsdetails VALUES('${Details.Ration}','${Details.Aadhar}','${Details.LivingRequirements}','${Details.Mandal_Key}',${Details.Connection_to_Work})`;
                                                    connection.query(RequirementsDetails, (err, result) => {
                                                        if (err) {
                                                            res.send({
                                                                err: err,
                                                                Message: "Failed at requirements Details"
                                                            })
                                                        }
                                                        else {
                                                           res.send({
                                                            Message: "All the records are recorded successfully.",
                                                            UniqueIdOfthePerson: Details.Connection_to_Work
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

        }
    });
});



module.exports = Router;