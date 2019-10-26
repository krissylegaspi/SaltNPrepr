// import React from 'react';

// export function installDynamoDB() {

//     /*
//     Access Key ID:AKIAIZU2C5CWSH5AXTLQ
//     Secret Access Key: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
//     */
//     var AWS = require('aws-sdk/dist/aws-sdk-react-native');
//     let awsConfig = {

//         region: 'US West (N. California)',
//         accessKeyId: 'AKIAIZU2C5CWSH5AXTLQ',
//         secretAccessKey: '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'
//     }
//     console.log("setup AWS")                        

//     console.log("setup credential")
//     AWS.config.update(awsConfig)
//     console.log("setup config")
//     let docClient = new AWS.DynamoDB.DocumentClient();
//     console.log("setup dynamo")             
//     return docClient;

// }

// export function addItemDB(table, json){

//     let docClient = installDynamoDB();
//     /*
//     var params = {
//         TableName: table, 
//         Item: json
//     }
//        dynamodb.putItem(params, function(err, data) {
//         if (err) console.log(err, err.stack); // an error occurred
//         else     console.log(data);           // successful response
//        });
//     console.log(dynamodb)
//     */
//     console.log("starting function")
   
//     var params = {
//         TableName: "Music",
//         Item: {
//             Artist: "Kevin Frazier"
//         }
//     };
//     console.log("made params")

//     docClient.put(params,function(err,data){
//         if(err){
//             console.log("error\n\n", err)
//         }
//         else{
//             console.log("success\n\n" ,data)
//         }
//     })

//     console.log("sucess or failure")

    
// }

// export function readItemDB(table,json){
//     /*

//   let fetchOneByKey = function(){

//         var params = {
//             TableName: "Music",
//             Key: {
//                 Artist: "Kevin Frazier"
//             }
//         };

//         docClient.get(params,function(err,data){
//             if(err){
//                 console.log("error")
//             }
//             else{
//                 console.log("success")
//             }
//         })

//     }
//     */
//     var dynamodb = installDynamoDB();
//     var params = {
//         TableName: table, 
//         Item: json
//     }
//        dynamodb.getItem(params, function(err, data) {
//         if (err) console.log(err, err.stack); // an error occurred
//         else     console.log(data);           // successful response
//        });

// }

// export function deleteItemDB(table,json){

//     var dynamodb = installDynamoDB();
//     var params = {
//         TableName: table, 
//         Item: json
//     }

//    dynamodb.deleteItem(params, function(err, data) {
//      if (err) console.log(err, err.stack); // an error occurred
//      else     console.log(data);           // successful response
//    });
// }