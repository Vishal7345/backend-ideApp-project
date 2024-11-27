//write the logic to create the controllers for the idea resources
const ideas= require('../models/index.models')

 let id = 3 //initial count of the id 
//create the controller for fetching the all ideas 


//Get 127.0.0.8000/ideaApp/api/v1/ideas

// return all the list of ideas 

 exports.getAllIdeas=(req,res)=>{
    res.status(200).send(ideas) //here 200 (meaning of 200 is ok all is right )is a  http status code  201 :something has been successfully created 
  //500 code :internal server error 

 }
 /**
  * controllers thats fetches idea based on the id 
  */
exports.getIdeaBasedOnId=(req,res)=>{
// first we need to read  all idea id from request path param
idea_id=req.params.id
//Using id .check if the idea with Id is present
if(ideas[idea_id]){
  res.status(200).send(ideas[idea_id])
}else{
  res.status(404).send({
    message:'Idea with a given idea id is not found  '
  })
}
//if present return Id

}
/**
 * constroller to create  new idea
 * 
 */
exports.createIdea=(req,res)=>{

 // i ned to read the reques body 
 idea_object = req.body
 id++
 idea_object['id']=id //seting the id in the newly created idea object.
 ideas[id]=idea_object 
 //Add the new object provided in the idea object
 //return the respone
 res.status(201).send(idea_object )//201 is the status code for creating somthing .
 



}