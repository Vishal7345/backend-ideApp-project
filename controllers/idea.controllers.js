//write the logic to create the controllers for the idea resources
const ideas= require('../models/index.models')


//create the controller for fetching the all ideas 


//Get 127.0.0.8000/ideaApp/api/v1/ideas

// return all the list of ideas 

 exports.getAllIdeas=(req,res)=>{
    res.status(200).send(ideas) //here 200 (meaning of 200 is ok all is right )is a  http status code  201 :something has been successfully created 
  //500 code :internal server error 

 }
