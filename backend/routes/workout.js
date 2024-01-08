import  express  from "express";
import wokout from '../models/workoutModel.js'
import {createWorkout,getallWorkout,getidWorkout,deleteWorkout,updateWorkout} from '../controllers/workoutController.js'
const router =express.Router()
//body parser
router.use(express.json())

//calling tthe function defined in workout controller.js


//Get all work out
router.get('/',getallWorkout)
 
//Create a work-out data in the db
router.post('/',createWorkout)

//get a single work-out data from the db from the id
router.get('/:id',getidWorkout)

//delete a single work-out data from the db from the id 
router.delete('/:id',deleteWorkout)

//update a single work-out data from the db from the id
router.patch('/:id',updateWorkout)


// 
export default router

    