import 'colors'
import  express  from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';

import workoutroutes from './routes/workout.js'


//initializng the express app
const app = express() 
console.log(" ")
//running it ina a port 

 app.listen(process.env.PORT,()=>{
    console.log(" > ".bgYellow+" App running at port ".bgCyan+" http://localhost:".blue + process.env.PORT.blue +"/".blue)
 })

 //Mongodb connection
 mongoose.connect(process.env.mongoUri).then(()=>{
    console.log("Connection established to Database...".magenta)
 }).catch((e)=>{
    console.log(e) 
    console.log("Error in  connecting to database make sure you have specified the correct mongo db Connection string".bgRed)
 })

//  function commented1 (){
// //  app.use((req,res, next)=>{ 
// //     console.log(req.path, req.method)
// // next()})

// //middileware // commented when routes are added
// // app.use((req,res,next)=>{
// //     console.log(req.path,req.method)
// //     // res.send("midleware1")
// //     next()
    
// // })


// // app.get('/',function (req,res){
// //     // res.send("Hello World");
// //     res.json({mmsg:"dsvg adsfg"})
    
// // })

//  }

//using routes defined in ./routes/workout.js
//all in workoutroutes will start with the end point '/api/workout' as mentoned below
app.use('/api/workout',workoutroutes)



