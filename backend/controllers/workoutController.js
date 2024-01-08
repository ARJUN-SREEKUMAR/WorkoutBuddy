import wokout from '../models/workoutModel.js'

const createWorkout=async (req,res)=>{

    const {title,load,reps}=req.body // object destructuring ... using only the specified value mentioned in the curly bracket

    try {  
        const workrespond = await wokout.create({title,load,reps})  //
        res.status(200).json(workrespond)
        console.log("Sucessfully Created")
    } catch (error) {
        res.status(400).json({error:error.message})
        console.log(error)
        
    }
    
}

const getallWorkout=async (req,res)=>{
    try {
        
        const workoutdata = await wokout.find()
        res.status(200).json(workoutdata)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getidWorkout= async(req,res)=>{
       
    const {id}=req.params

    try {
        const datafromID= await wokout.findById(id)
        if (datafromID) {
            res.status(200).json({
                data:datafromID,
            })
            
        }
    } catch (error) {
        res.status(404).json({
            msg:"Data not found  with the given id "+id,
    })
  
   
}}

const deleteWorkout =async(req,res)=>{
    const {id}=req.params
    const deleted=await wokout.deleteOne({_id:id}).catch((err)=>{
        res.status(404).json({error:"Error in deleting the data"})
    })
    if (deleted) {
        res.status(200).json({msg:"Elemented deleted from DB"})
        
    }
    

}

const updateWorkout=async(req,res)=>{
    const {id}=req.params
    try {
        const{reps,load,title}=req.body
        const updatedelement = await wokout.findByIdAndUpdate(id,{
            title:title,
            reps:reps,
            load:load
            //...req.body also can be used instead of the above 3 lines
        },{ new: true }
        )
        if (updatedelement) {

            res.status(200).json({
                msg:"Element Updated",
                data:updatedelement
            })
            
        }
    } catch (error) {
        res.status(404).json({msg:error})
        
    }
}

export {createWorkout,getallWorkout,getidWorkout,deleteWorkout,updateWorkout}